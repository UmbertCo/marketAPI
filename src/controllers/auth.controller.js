import { UserModel } from "../models/user.js";

export const getUsers = async (req, res) => {
  const posts = await UserModel.findAll()
  res.send(posts);
};

export const createUser = async (req, res) => {
  const { imageID, role } = req.body;
  const newUser = await UserModel.create({
    imageID,
    role,
    status: 'A'
  });
  res.send(newUser);
};
