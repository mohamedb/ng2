/// <reference path="../../services/TaskService.ts"/>
/// <reference path="../../models/TaskModel.ts"/>

import {Component,Output,EventEmitter, View, bootstrap, CORE_DIRECTIVES,provide} from 'angular2/angular2';
import {Http, HTTP_BINDINGS, ConnectionBackend} from 'angular2/http';
import { ROUTER_DIRECTIVES,RouterLink, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
import {TaskService}   from '../../services/TaskService';
import {UtilisateurService} from '../../services/UtilisateurService';
import {TaskModel}     from '../../models/TaskModel';
import {AjouterUtilisateurFormDirective}     from '../../directives/AjouterUtilisateurFormDirective';



@Component({
    selector: 'my-app',
    providers: [UtilisateurService,RouterLink,Location]
})
@View({
    templateUrl: 'app/components/users/users.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES,AjouterUtilisateurFormDirective]
})
 
export class Users {    
    utilisateurs: Array<any>;
    utilisateurAEditer:any={name:"",email:""};
    edition:boolean=false;
    
    constructor(utilisateurService:UtilisateurService, location: Location) {
        utilisateurService.getUtilisateurs().subscribe(people => this.utilisateurs = people);
      
    }
    edit(utilisateur:any){
        this.edition=true;
        this.utilisateurAEditer=utilisateur;    
        
    }
    fermerEdition(){
        this.edition=false;
    }
}
 