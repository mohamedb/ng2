/// <reference path="services/TaskService.ts"/>
/// <reference path="models/TaskModel.ts"/>

import {Component, View, bootstrap, NgFor,provide} from 'angular2/angular2';
import {Http, HTTP_BINDINGS, ConnectionBackend} from 'angular2/http';
import { ROUTER_DIRECTIVES,RouterLink, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
import {TaskService} from './services/TaskService';
import {UtilisateurService} from './services/UtilisateurService';
import {TaskModel} from './models/TaskModel';
 
import {Users} from './components/users/Users';
import {Index} from './components/index/Index'; 
import {LeftMenuDirective} from './directives/LeftMenuDirective';

@Component({
    selector: 'my-app',
    providers: [TaskService, UtilisateurService,RouterLink,Location]
})
@View({
    templateUrl: 'app/main.html',
    directives: [NgFor,ROUTER_DIRECTIVES,LeftMenuDirective]
})
@RouteConfig([
   new Route({ path: '/', component: Index, as: 'Index' }),
   new Route({path: '/users', component: Users, as: 'Users'})
])
class AppComponent {
    
    location: Location;
    tasks: Array<any>;

    constructor(taskS: TaskService, location: Location) {
        this.tasks = taskS.getTasks();       
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
}

bootstrap(AppComponent, [HTTP_BINDINGS,ROUTER_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy})]);

