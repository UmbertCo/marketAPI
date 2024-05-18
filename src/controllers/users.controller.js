import { UserModel } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await UserModel.findAll()
  res.send(users);
};