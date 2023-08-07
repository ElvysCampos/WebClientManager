import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  password: z.string().nonempty("Senha é obrigatória"),
  phone_number: z.string(),
  created_at: z.date(),
});

export type UserData = z.infer<typeof userSchema>;

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

const loginSchema = userSchema.omit({
  name: true,
});

export type LoginData = z.infer<typeof loginSchema>;

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdate,
  loginSchema,
};
