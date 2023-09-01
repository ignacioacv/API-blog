import { Router } from "express";
import {
  getComments,
  createComment,
  editCommentById,
  deleteCommentById,
  getCommentById,
} from "../controller/commentsController";

const router = Router();

router.post("/comments", createComment);

router.get("/comments", getComments);

router.get("/comments/:id", getCommentById);

router.put("/comments/:id", editCommentById);

router.delete("/comments/:id", deleteCommentById);

export default router;
