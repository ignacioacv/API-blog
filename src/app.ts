import express from "express";
import postRoute from "./routes/post.routes";
import commentsRoute from "./routes/comments.routes";

const app = express();
app.use(express.json());

app.use("/api", postRoute);
app.use("/api", commentsRoute);

export default app;
