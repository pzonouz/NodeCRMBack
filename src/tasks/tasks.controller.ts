import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';
import { TaskType } from './taskType.enum';

@UseGuards(JwtGuard)
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get('')
  async findAll(): Promise<any> {
    return await this.tasksService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Put('/edit/:id')
  async editOne(@Param('id') id: number, @Body() task: Task): Promise<any> {
    return await this.tasksService
      .editOne(id, task)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.detail;
      });
  }
  @Delete('/delete/:id')
  async deleteOne(@Param('id') id: number) {
    return await this.tasksService
      .deleteOne(id)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.detail;
      });
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  async createOne(@Body() task: Task, @Req() req: any): Promise<any> {
    task.dateIssued = new Date();
    task.status = TaskType.DOING;
    task.user = req.user;
    return await this.tasksService
      .createOne(task)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.detail;
      });
  }
}
