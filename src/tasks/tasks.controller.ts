import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './models/task.entity';
import { TaskCreateDto } from './dto/task.create.dto';
import { TaskUpdateDto } from './dto/task.update.dto';

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

    @Get("/:id")
    async getTaskForId(@Param() params: any): Promise<Tasks> {
        return await this.service.getAllTaskForId(params.id)
    }

    @Put("/:id")
    async updateTask(@Param() params: any, @Body() dto: TaskUpdateDto): Promise<Tasks> {
        return await this.service.updateTask(params.id , dto)
    }
}
