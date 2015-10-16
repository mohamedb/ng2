/// <reference path="services/TaskService.ts"/>
/// <reference path="models/TaskModel.ts"/>

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
//import {TaskService} from 'app/services/TaskService';
//import {TaskModel} from 'app/models/TaskModel';

class TaskService {
    tasks: Array<any>;
    getTasks(): Array<TaskModel> {
        this.tasks = ["A", "B"]
        return this.tasks;
    }
}

class TaskModel {
    user: string;
    title: string;
    constructor(user: string, title: string) {
        this.user = user;
        this.title = title;
    }
}


@Component({
    selector: 'my-app',
    appInjector: [TaskService]
})
@View({
    templateUrl: 'app/views/tasksList.html',
    directives: [NgFor]
})
class AppComponent {
    tasks: Array<any>;
    constructor(taskService: TaskService) {
        this.tasks = taskService.getTasks();
    }
}

bootstrap(AppComponent);

