import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import listContactsService from "../services/contacts/readAllContacts.service";
import updateContactService from "../services/contacts/updateContacts.service";
import deleteContactService from "../services/contacts/deleteContacts.service";

const createContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newContact = await createContactService(req.body, userId);

  return res.status(201).json(newContact);
};

const listContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contacts = await listContactsService(userId);

  return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const updatedContact = await updateContactService(req.body, req.params.id);
  return res.json(updatedContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);
  return res.status(204).send();
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
