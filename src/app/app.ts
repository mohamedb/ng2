/// <reference path="services/TaskService.ts"/>
/// <reference path="models/TaskModel.ts"/>

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {TaskService} from './services/TaskService';
import {TaskModel} from './models/TaskModel';

 



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

