 
import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_BINDINGS, ConnectionBackend} from 'angular2/http';
import { ROUTER_DIRECTIVES, RouterLink, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy,
         Route, AsyncRoute, Router } from 'angular2/router';
import {TaskService}   from '../../services/TaskService';
import {UtilisateurService} from '../../services/UtilisateurService';
import {TaskModel}     from '../../models/TaskModel';
import {AddTaskFormDirective}     from '../../directives/AddTaskFormDirective';
import {NotificationDirective}              from '../../directives/NotificationDirective';




@Component({
    selector: 'index-page',
    providers: [TaskService, UtilisateurService, RouterLink, Location]
})
@View({
    templateUrl: 'app/components/index/index.html',
    directives: [CORE_DIRECTIVES,ROUTER_DIRECTIVES,AddTaskFormDirective,NotificationDirective]
})

export class Index {
    location: Location;
    people: Array<any>=[];
    notificationMessage:string =""; 

    constructor(taskS: TaskService, location: Location, peopleService: UtilisateurService) {
        //peopleService.getPeople().subscribe(people => this.people = people);
        this.people.push({task:"Préparer la Doc",name:"MED"});
        this.location = location;
    }
    initMessageEventReceiver(){
       this.notificationMessage="";
    }
    
    /**
     * Distinguer les fonctions "Intercepter" les evenements provenant d'autres Compoenents 
     */
    pushTaskEventReceiver(obj:any) {
        console.log('called! .next=> '+JSON.stringify(obj));
        this.people.push({ name: obj.name, task: obj.task });
        this.notificationMessage="Ajout avec succès";
    }
}
 