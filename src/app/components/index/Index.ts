 
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
    providers: [TaskService, UtilisateurService, RouterLink]
})
@View({
    templateUrl: 'app/components/index/index.html',
    directives: [CORE_DIRECTIVES,ROUTER_DIRECTIVES,AddTaskFormDirective,NotificationDirective]
})

export class Index {

    people: Array<any>=[];
    notificationMessage:string =""; 
    ajout:boolean=false;

    constructor(taskS: TaskService, peopleService: UtilisateurService) {
        //peopleService.getPeople().subscribe(people => this.people = people);
        this.people.push({task:"Préparer la Doc",name:"MED"});    
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
        this.fermerAjout();
        this.notificationMessage="Ajout avec succès";
    }
    activerAjout(){
        this.ajout=true;
    }
    fermerAjout(){
        this.ajout=false;
    }
}
 