import { UserModel } from "../models/user.js";

// export const getPosts = async (req, res) => {
//   const posts = await PostModel.findAll()
//   res.send(posts);
// };

export const createUser = async (req, res) => {
  const { username, pass } = req.body;
  const newUser = await UserModel.create({
    username,
    pass,
    imageID: 0
  });
  res.send(newUser);
};

