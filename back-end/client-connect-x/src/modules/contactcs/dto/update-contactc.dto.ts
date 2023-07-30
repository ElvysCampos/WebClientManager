import { PartialType } from '@nestjs/mapped-types';
import { CreateContactcDto } from './create-contactc.dto';

export class UpdateContactcDto extends PartialType(CreateContactcDto) {}
