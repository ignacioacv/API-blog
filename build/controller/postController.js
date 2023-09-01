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
exports.deletePostById = exports.editPostById = exports.getPostById = exports.getAllPosts = exports.createPost = void 0;
const postModels_1 = require("../model/postModels");
// Crear una nueva publicación
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const post = new postModels_1.PostModel({ title, content });
        const postSaved = yield post.save();
        res.json({
            id: postSaved._id,
            post_title: postSaved.title,
            post_content: postSaved.content,
            createdAt: postSaved.createdAt,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear la publicación" });
    }
});
exports.createPost = createPost;
// Obtener todas las publicaciones
const getAllPosts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield postModels_1.PostModel.find();
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener las publicaciones" });
    }
});
exports.getAllPosts = getAllPosts;
// Obtener una publicación por ID
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        const post = yield postModels_1.PostModel.findById(postId);
        if (!post) {
            return res.status(404).json({ error: "Publicación no encontrada" });
        }
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener la publicación" });
    }
});
exports.getPostById = getPostById;
// Editar una publicación por ID
const editPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        const post = yield postModels_1.PostModel.findByIdAndUpdate(postId, req.body, {
            new: true,
        });
        if (!post) {
            return res.status(404).json({ error: "Publicación no encontrada" });
        }
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Error al editar la publicación" });
    }
});
exports.editPostById = editPostById;
// Borrar una publicación por ID
const deletePostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        const post = yield postModels_1.PostModel.findByIdAndRemove(postId);
        if (!post) {
            return res.status(404).json({ error: "Publicación no encontrada" });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Error al borrar la publicación" });
    }
});
exports.deletePostById = deletePostById;
