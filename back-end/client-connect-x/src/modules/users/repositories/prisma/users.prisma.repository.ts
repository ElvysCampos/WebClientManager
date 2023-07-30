/* eslint-disable prettier/prettier */
// users.prisma.service.ts

import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { User } from '@prisma/client';
import { CreateUserDto } from '../../dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    // Implementação do método create utilizando o Prisma
    const createdUser = await this.prisma.user.create({ data });
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    // Implementação do método findAll utilizando o Prisma
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }

  async findOne(id: string): Promise<User> {
    // Implementação do método findOne utilizando o Prisma
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async update(id: string, data: Partial<CreateUserDto>): Promise<User> {
    // Implementação do método update utilizando o Prisma
    const updatedUser = await this.prisma.user.update({ where: { id }, data });
    return updatedUser;
  }

  async delete(id: string): Promise<void> {
    // Implementação do método delete utilizando o Prisma
    await this.prisma.user.delete({ where: { id } });
  }
}
