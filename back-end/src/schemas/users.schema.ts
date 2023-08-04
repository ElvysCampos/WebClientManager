import { z } from "zod";
import { contactSchema } from "./contacts.schemas";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone_number: z.string(),
  created_at: z.date(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  created_at: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const usersSchemaResponse = z.array(userSchema);

const userSchemaUpdate = userSchema
  .omit({
    id: true,
    created_at: true,
  })
  .partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdate,
};
