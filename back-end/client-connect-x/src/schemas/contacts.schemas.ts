import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone_number: z.string(),
  created_at: z.date(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  created_at: true,
});

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
    created_at: true,
  })
  .partial();

const contactsSchemaResponse = z.array(contactSchema);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactsSchemaResponse,
};
