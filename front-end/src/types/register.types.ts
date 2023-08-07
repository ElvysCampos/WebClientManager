import { userSchema } from "@/schemas/user.schema";
import { z } from "zod";

export type UserData = z.infer<typeof userSchema>;
