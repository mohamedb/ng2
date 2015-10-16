/// <reference path="../models/TaskModel.ts"/>
import {TaskModel} from 'models/TaskModel'
export class TaskService{
  tasks:Array<TaskModel>;
  constructor(){
     this.tasks=[new TaskModel("Med","Update server"), new TaskModel("SLH","Translate Msg")]
   }
   getTasks(): Array<TaskModel>{
     return this.tasks;
   }
}