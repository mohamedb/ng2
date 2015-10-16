/// <reference path="services/TaskService.ts"/>
/// <reference path="models/TaskModel.ts"/>

import {Component, bootstrap, NgFor} from 'angular2/angular2';
import {TaskService} from 'services/TaskService';
import {TaskModel} from 'models/TaskModel';
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/tasksList.html',
    directives: [NgFor],
    appInjector: [TaskService]
})
class AppComponent {
    tasks:Array<TaskModel>;
    constructor(taskService: TaskService){
        this.tasks=taskService.getTasks(); 
    }
}
     
bootstrap(AppComponent);