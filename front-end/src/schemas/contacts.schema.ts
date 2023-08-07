import { z } from "zod";

const contactsSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone_number: z.string(),
  createAt: z.string(),
});

export { contactsSchema };
