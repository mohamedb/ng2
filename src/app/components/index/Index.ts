/// <reference path="../../services/TaskService.ts"/>
/// <reference path="../../models/TaskModel.ts"/>

import {Component, View, bootstrap, NgFor, provide} from 'angular2/angular2';
import {Http, HTTP_BINDINGS, ConnectionBackend} from 'angular2/http';
import { ROUTER_DIRECTIVES, RouterLink, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
import {TaskService} from '../../services/TaskService';
import {PeopleService} from '../../services/peopleService';
import {TaskModel} from '../../models/TaskModel';
import {TaskInput} from '../../directives/TaskInput';



@Component({
    selector: 'my-app',
    providers: [TaskService, PeopleService, RouterLink, Location]
})
@View({
    templateUrl: 'app/components/index/index.html',
    directives: [NgFor, TaskInput, ROUTER_DIRECTIVES]
})

export class Index {
    location: Location;
    people: Array<any>;

    constructor(taskS: TaskService, location: Location, peopleService: PeopleService) {
        peopleService.getPeople().subscribe(people => this.people = people);
        this.location = location;
    }
    everySecond(obj:any) {
        console.log('called! .next=> '+JSON.stringify(obj));
    }
    saveTask($event: any, user: any, task: any) {
        $event.preventDefault();
        console.log("User: " + user.value + "\n taskTitle: " + task.value);
        this.people.push({ name: user.value });

    }
}
 