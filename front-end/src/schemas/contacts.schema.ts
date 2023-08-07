import { z } from "zod";

const contactsSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  telefone: z.string(),
  createAt: z.string(),
});

export { contactsSchema };
