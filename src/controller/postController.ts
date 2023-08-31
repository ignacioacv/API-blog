import { Request, Response } from "express";
import { PostModel } from "../model/postModels";

// Crear una nueva publicación
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const post = new PostModel({ title, content });
    const postSaved = await post.save();
    res.json({
      id: postSaved._id,
      post_title: postSaved.title,
      post_content: postSaved.content,
      createdAt: postSaved.createdAt,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la publicación" });
  }
};

// Obtener todas las publicaciones
export const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las publicaciones" });
  }
};

// Obtener una publicación por ID
export const getPostById = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la publicación" });
  }
};

// Editar una publicación por ID
export const editPostById = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findByIdAndUpdate(postId, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error al editar la publicación" });
  }
};

// Borrar una publicación por ID
export const deletePostById = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findByIdAndRemove(postId);
    if (!post) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al borrar la publicación" });
  }
};
