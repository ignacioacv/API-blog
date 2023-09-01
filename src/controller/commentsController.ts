import { Request, Response } from "express";
import { CommentModel } from "../model/commentModel";
import { PostModel } from "../model/postModels";

// Crear un nuevo comentario
export const createComment = async (req: Request, res: Response) => {
  try {
    const { text, postId } = req.body;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }
    const comment = new CommentModel({ text, post });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el comentario" });
  }
};

// Editar un comentario por ID
export const editCommentById = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.id;
    const { text } = req.body;
    const comment = await CommentModel.findByIdAndUpdate(
      commentId,
      { text },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error al editar el comentario" });
  }
};

// Borrar un comentario por ID
export const deleteCommentById = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.id;
    const comment = await CommentModel.findByIdAndRemove(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al borrar el comentario" });
  }
};