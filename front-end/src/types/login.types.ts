import { loginSchema } from "@/schemas/loginSchema";
import { z } from "zod";

export type LoginData = z.infer<typeof loginSchema>;
