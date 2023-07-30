import { Module } from '@nestjs/common';
import { ContactcsService } from './contactcs.service';
import { ContactcsController } from './contactcs.controller';

@Module({
  controllers: [ContactcsController],
  providers: [ContactcsService]
})
export class ContactcsModule {}
