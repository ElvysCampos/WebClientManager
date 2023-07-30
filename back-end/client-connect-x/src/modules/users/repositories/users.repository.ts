/* eslint-disable prettier/prettier */
import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: string): Promise<User>;
  abstract update(id: string): Promise<User>;
  abstract delete(id: string): Promise<void>;
}
