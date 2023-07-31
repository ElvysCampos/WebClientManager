import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/error";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (
  data: TContactRequest,
  userId: string
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export default createContactService;
