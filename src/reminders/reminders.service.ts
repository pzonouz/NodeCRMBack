import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Reminder } from './reminders.entity';
import { ReminderType } from './reminderType.enum';

@Injectable()
export class RemindersService {
  constructor(
    @InjectRepository(Reminder)
    private reminderRepository: Repository<Reminder>,
  ) {}
  async createOne(reminder: Reminder) {
    reminder.status = ReminderType.DOING;
    this.reminderRepository.create(reminder);
    return await this.reminderRepository.insert(reminder);
  }
  async findAll(user: User) {
    return await this.reminderRepository.find({ user: user });
  }
}
