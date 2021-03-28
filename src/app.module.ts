import { Contact } from './contacts/contacts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { RemindersModule } from './reminders/reminders.module';
import { Task } from './tasks/tasks.entity';
import { Reminder } from './reminders/reminders.entity';

@Module({
  imports: [
    ContactsModule,
    PassportModule,
    TypeOrmModule.forRoot({
      entities: [Contact, User, Task, Reminder],
    }),
    AuthModule,
    TasksModule,
    UsersModule,
    RemindersModule,
  ],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
