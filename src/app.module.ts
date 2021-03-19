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

@Module({
  imports: [
    ContactsModule,
    PassportModule,
    TypeOrmModule.forRoot({
      entities: [Contact, User],
    }),
    AuthModule,
    TasksModule,
    UsersModule,
  ],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
