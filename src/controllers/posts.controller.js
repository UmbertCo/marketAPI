import { PostModel } from "../models/post.js";

export const getPosts = (req, res) => {
  res.send("getPosts works");
};

export const createPosts = async (req, res) => {
  const { imageCollectionID, userID, title, description } = req.body;
  const newPost = await PostModel.create({
    imageCollectionID,
    userID,
    title,
    description,
  });
  res.send("createPosts works");
};
