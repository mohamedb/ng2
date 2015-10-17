/// <reference path="services/TaskService.ts"/>
/// <reference path="models/TaskModel.ts"/>

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Http, HTTP_BINDINGS, ConnectionBackend} from 'angular2/http';
import {TaskService} from './services/TaskService';
import {PeopleService} from './services/peopleService';
import {TaskModel} from './models/TaskModel';
import {TaskInput} from './directives/TaskInput';



@Component({
    selector: 'my-app',
    providers: [TaskService, PeopleService]
})
@View({
    templateUrl: 'app/views/tasksList.html',
    directives: [NgFor, TaskInput]
})
class AppComponent {
    tasks: Array<any>;
    people: Array<any>;

    constructor(taskS: TaskService, peopleService: PeopleService) {
        this.tasks = taskS.getTasks();
        peopleService.getPeople().subscribe(people => this.people = people);
    }
}

bootstrap(AppComponent, [HTTP_BINDINGS]);

