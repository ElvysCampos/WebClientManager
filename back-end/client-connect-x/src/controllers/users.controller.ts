import { Request, Response } from "express";
import readUsersService from "../services/users/readAllUser.service";
import createUserService from "../services/users/createUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const createdUser = await createUserService(req.body);

  return res.status(201).json(createdUser);
};

const readUsersController = async (req: Request, res: Response) => {
  const users = await readUsersService();

  return res.json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.body, req.params.id);
  return res.json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);
  return res.status(204).send();
};

export {
  createUserController,
  readUsersController,
  updateUserController,
  deleteUserController,
};
