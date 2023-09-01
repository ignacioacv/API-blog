import { Request, Response } from "express";
import { CommentModel } from "../model/commentModel";

// Crear un nuevo comentario
export const createComment = async (req: Request, res: Response) => {
  try {
    const { text, post } = req.body;
    const comment = new CommentModel({ text, post });
    const commentSaved = await comment.save();
    res.json({
      id: commentSaved._id,
      comment_text: commentSaved.text,
      owner: commentSaved.post,
    });
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
