import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';
import { TaskType } from './taskType.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<any> {
    return await this.taskRepository.find().then((result) => {
      return result;
    });
  }
  findOne(): Promise<Task> {
    return this.taskRepository.findOne();
  }
  async editOne(id: number, Task: Task): Promise<any> {
    await this.taskRepository.update(id, Task);
  }
  async createOne(Task: Task): Promise<any> {
    Task.status = TaskType.DOING;
    this.taskRepository.create(Task);
    await this.taskRepository.insert(Task);
  }
  async deleteOne(id: number): Promise<any> {
    await this.taskRepository.delete(id);
  }
}
