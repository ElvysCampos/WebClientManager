import { z } from "zod";

export const userSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  password: z.string().nonempty("Senha é obrigatória"),
  phone_number: z.string(),
});
