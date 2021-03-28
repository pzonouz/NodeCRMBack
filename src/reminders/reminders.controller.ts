import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { Reminder } from './reminders.entity';
import { RemindersService } from './reminders.service';
import { ReminderType } from './reminderType.enum';

@UseGuards(JwtGuard)
@Controller('reminders')
export class RemindersController {
  constructor(private remindersService: RemindersService) {}
  @Get('')
  async findAll(@Req() req: any) {
    return await this.remindersService.findAll(req.user);
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  async createOne(@Body() reminder: Reminder, @Req() req: any): Promise<any> {
    reminder.dataIssued = new Date();
    reminder.status = ReminderType.DOING;
    reminder.user = req.user;
    return await this.remindersService
      .createOne(reminder)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.detail;
      });
  }
}
