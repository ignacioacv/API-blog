import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  editPostById,
  deletePostById,
} from "../controller/postController";

const router = Router();

router.post("/posts", createPost);

router.get("/posts", getAllPosts);

router.get("/posts/:id", getPostById);

router.put("/posts/:id", editPostById);

router.delete("/posts/:id", deletePostById);

export default router;
