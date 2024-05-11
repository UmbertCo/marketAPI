import { PostModel } from "../models/post.js";

export const getPosts = async (req, res) => {
  const posts = await PostModel.findAll()
  res.send(posts);
};

export const createPosts = async (req, res) => {
  const { imageCollectionID, userID, title, description } = req.body;
  const newPost = await PostModel.create({
    imageCollectionID,
    userID,
    title,
    description,
  });
  res.send(newPost);
};
