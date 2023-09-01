import { Router } from "express";
import {
  getComments,
  createComment,
  editCommentById,
  deleteCommentById,
  getCommentsById,
} from "../controller/commentsController";

const router = Router();

router.post("/comments", createComment);

router.get("/comments", getComments);

router.get("/comments/:id", getCommentsById);

router.put("/comments/:id", editCommentById);

router.delete("/comments/:id", deleteCommentById);

export default router;
