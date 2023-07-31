import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const createTokenController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await loginService({ email, password });

  return res.json({ token });
};

export { createTokenController };
