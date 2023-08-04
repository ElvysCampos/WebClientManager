import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { sessionRoutes } from "./routes/login.routes";
import { contactRoutes } from "./routes/contacts.routes";
import { handleErrors } from "./errors/error";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactRoutes);
app.use(handleErrors);

export default app;
