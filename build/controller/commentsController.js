"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentById = exports.editCommentById = exports.createComment = exports.getComments = void 0;
const commentModel_1 = require("../model/commentModel");
//Buscar comentario
const getComments = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield commentModel_1.CommentModel.find().populate("post");
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener los comentarios" });
    }
});
exports.getComments = getComments;
// Crear un nuevo comentario
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, post } = req.body;
        const comment = new commentModel_1.CommentModel({ text, post });
        const commentSaved = yield comment.save();
        res.json({
            id: commentSaved._id,
            comment_text: commentSaved.text,
            owner: commentSaved.post,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el comentario" });
    }
});
exports.createComment = createComment;
// Editar un comentario por ID
const editCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.id;
        const { text } = req.body;
        const comment = yield commentModel_1.CommentModel.findByIdAndUpdate(commentId, { text }, { new: true });
        if (!comment) {
            return res.status(404).json({ error: "Comentario no encontrado" });
        }
        res.status(200).json(comment);
    }
    catch (error) {
        res.status(500).json({ error: "Error al editar el comentario" });
    }
});
exports.editCommentById = editCommentById;
// Borrar un comentario por ID
const deleteCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.id;
        const comment = yield commentModel_1.CommentModel.findByIdAndRemove(commentId);
        if (!comment) {
            return res.status(404).json({ error: "Comentario no encontrado" });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Error al borrar el comentario" });
    }
});
exports.deleteCommentById = deleteCommentById;
