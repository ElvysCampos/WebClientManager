import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/error";
import { userSchema } from "../../schemas/users.schema";

const updateUserService = async (data: any, userId: string): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const oldUser = await userRepository.findOne({ where: { id: userId } });

  if (!oldUser) {
    throw new AppError("User not found", 404);
  }

  const newUserData = userRepository.create({
    ...oldUser,
    ...data,
  });

  await userRepository.save(newUserData);

  return userSchema.parse(newUserData);
};

export default updateUserService;
