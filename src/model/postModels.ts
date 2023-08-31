import { prop, getModelForClass } from "@typegoose/typegoose";

class Post {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  content: string;

  @prop({ default: Date.now })
  createdAt?: Date;
}

const PostModel = getModelForClass(Post);

export { PostModel, Post };
