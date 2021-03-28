import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RemindersController } from './reminders.controller';
import { Reminder } from './reminders.entity';
import { RemindersService } from './reminders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reminder]), AuthModule],
  controllers: [RemindersController],
  providers: [RemindersService],
})
export class RemindersModule {}
