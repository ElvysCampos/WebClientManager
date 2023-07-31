import { Router } from "express";
import { createTokenController } from "../controllers/login.controller";
import ensureSchemaMiddleware from "../middlewares/schema.middleware";
import { loginSchemaRequest } from "../schemas/login.schema";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureSchemaMiddleware(loginSchemaRequest),
  createTokenController
);

export { sessionRoutes };
