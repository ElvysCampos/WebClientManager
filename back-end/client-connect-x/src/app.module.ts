import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ContactcsModule } from './modules/contactcs/contactcs.module';

@Module({
  imports: [UsersModule, ContactcsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
