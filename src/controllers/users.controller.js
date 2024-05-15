import { UserModel } from "../models/user.js";

export const getUsers = async (req, res) => {
  const users = await UserModel.findAll()
  res.send(users);
};

export const createUser = async (req, res) => {
  const { username, pass } = req.body;
  const newUser = await UserModel.create({
    username,
    pass,
    imageID: 0
  });
  res.send(newUser);
};

