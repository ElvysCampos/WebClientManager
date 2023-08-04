import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureTokenIsValidExists } from "../middlewares/login.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/users.contacts.middlewares";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schemas";
import ensureSchemaMiddleware from "../middlewares/schema.middleware";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureTokenIsValidExists,
  ensureSchemaMiddleware(contactSchemaRequest),
  createContactController
);
contactRoutes.get("", ensureTokenIsValidExists, listContactController);
contactRoutes.patch(
  "/:id",
  ensureTokenIsValidExists,
  ensureIsOwnerMiddleware,
  ensureSchemaMiddleware(contactSchemaUpdate),
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureTokenIsValidExists,
  ensureIsOwnerMiddleware,
  deleteContactController
);

export { contactRoutes };
