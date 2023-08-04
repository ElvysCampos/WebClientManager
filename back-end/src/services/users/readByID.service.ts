import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

const getUserID = async (userID: string): Promise<User | any> => {
  const userRepository: Repository<User> =
    AppDataSource.getTreeRepository(User);
  const userFind = await userRepository.findOne({
    where: {
      id: userID,
    },
  });
  return userFind;
};

export default getUserID;
