import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './models/task.entity';
import { TaskCreateDto } from './dto/task.create.dto';

@Controller('tasks')
export class TasksController {
    constructor(private service: TasksService) { }

    @Get()
    async getTask(): Promise<Tasks[]> {
        return await this.service.getAllTask()
    }


    @Post()
    async createTask(@Body() dto: TaskCreateDto): Promise<Tasks> {
        return await this.service.createTask(dto)
    }
}
