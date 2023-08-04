import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/error";

const ensureTokenIsValidExists = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  let tokenRequest: string | undefined = request.headers.authorization;

  if (!tokenRequest) {
    throw new AppError("Missing Bearer Token", 401);
  }

  const [_bearer, token] = tokenRequest.split(" ");

  jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    response.locals.userId = decoded.sub;

    return next();
  });
};

export { ensureTokenIsValidExists };
