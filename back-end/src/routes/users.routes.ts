import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController,
  userIDController,
} from "../controllers/users.controller";
import { ensureTokenIsValidExists } from "../middlewares/login.middleware";
import ensureSchemaMiddleware from "../middlewares/schema.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureSchemaMiddleware(userSchemaRequest),
  createUserController
);
userRoutes.get("", ensureTokenIsValidExists, readUsersController);
userRoutes.get("/:id", ensureTokenIsValidExists, userIDController);
userRoutes.patch(
  "/:id",
  ensureTokenIsValidExists,
  ensureSchemaMiddleware(userSchemaUpdate),
  updateUserController
);
userRoutes.delete("/:id", ensureTokenIsValidExists, deleteUserController);

export { userRoutes };
