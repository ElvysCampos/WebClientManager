import { Injectable } from '@nestjs/common';
import { CreateContactcDto } from './dto/create-contactc.dto';
import { UpdateContactcDto } from './dto/update-contactc.dto';

@Injectable()
export class ContactcsService {
  create(createContactcDto: CreateContactcDto) {
    return 'This action adds a new contactc';
  }

  findAll() {
    return `This action returns all contactcs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactc`;
  }

  update(id: number, updateContactcDto: UpdateContactcDto) {
    return `This action updates a #${id} contactc`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactc`;
  }
}
