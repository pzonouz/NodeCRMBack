import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReminderType } from './reminderType.enum';

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  dataIssued: Date;

  @Column()
  dateToRemind: Date;

  @Column()
  status: ReminderType.DOING;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
