/// <reference path="services/TaskService.ts"/>
/// <reference path="models/TaskModel.ts"/>

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
//import {TaskService} from './services/TaskService';
//import {TaskModel} from 'app/models/TaskModel';


class TaskModel {
    user: string;
    title: string;
    constructor(user: string, title: string) {
        this.user = user;
        this.title = title;
    }
}
class TaskService {
    tasks: Array<any>;
    getTasks(): Array<TaskModel> {
        this.tasks = [new TaskModel("MED","API DOC"), new TaskModel("MIA","PPT PRES")];
        return this.tasks;
    }
}


@Component({
    selector: 'my-app',
    providers: [TaskService]
})
@View({
    templateUrl: 'app/views/tasksList.html',
    directives: [NgFor]
})
class AppComponent {
    tasks: Array<any>;
    constructor(taskS: TaskService) {
        this.tasks = taskS.getTasks();
    }
}

bootstrap(AppComponent);

