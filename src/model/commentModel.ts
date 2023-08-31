import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Post } from "./postModels";

class Comment {
  @prop({ required: true })
  text: string;

  @prop({ ref: () => Post, required: true })
  post: Ref<Post>;

  @prop({ default: Date.now })
  createdAt?: Date;
}

const CommentModel = getModelForClass(Comment);

export { CommentModel, Comment };
