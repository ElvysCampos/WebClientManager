import { contactsSchema } from "@/schemas/contacts.schema";
import { z } from "zod";

export type TContactData = z.infer<typeof contactsSchema>;
