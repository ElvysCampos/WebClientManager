import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { TLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/error";
import { User } from "../../entities/user.entity";

const loginService = async ({ email, password }: TLoginRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign({ userName: user.name }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: user.id,
  });

  return token;
};

export default loginService;
