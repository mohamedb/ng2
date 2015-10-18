/// <reference path="../models/TaskModel.ts"/>
import {TaskModel} from '../models/TaskModel'
export class TaskService {
    tasks: Array<any>;
    getTasks(): Array<TaskModel> {
        this.tasks = [new TaskModel("MED","API DOC"), new TaskModel("MIA","PPT PRES")];
        return this.tasks;  
    }
}