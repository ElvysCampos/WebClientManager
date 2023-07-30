import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactcsService } from './contactcs.service';
import { CreateContactcDto } from './dto/create-contactc.dto';
import { UpdateContactcDto } from './dto/update-contactc.dto';

@Controller('contactcs')
export class ContactcsController {
  constructor(private readonly contactcsService: ContactcsService) {}

  @Post()
  create(@Body() createContactcDto: CreateContactcDto) {
    return this.contactcsService.create(createContactcDto);
  }

  @Get()
  findAll() {
    return this.contactcsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactcsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactcDto: UpdateContactcDto) {
    return this.contactcsService.update(+id, updateContactcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactcsService.remove(+id);
  }
}
