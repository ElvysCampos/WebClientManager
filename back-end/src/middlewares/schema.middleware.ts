import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureSchemaMiddleware =
  (schema: ZodTypeAny) =>
  (
    request: Request,
    response: Response,
    next: NextFunction
  ): void | Response => {
    const validatedSchema = schema.parse(request.body);

    request.body = validatedSchema;

    return next();
  };

export default ensureSchemaMiddleware;
