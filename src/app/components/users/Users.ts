/// <reference path="../../services/TaskService.ts"/>
/// <reference path="../../models/TaskModel.ts"/>
/// <reference path="../../../../typings/tsd.d.ts"/>
/// <reference path="../../../../typings/underscore/underscore.d.ts"/>
 
import {Component,Output,EventEmitter, View, bootstrap, CORE_DIRECTIVES,provide} from 'angular2/angular2';
import {Http, HTTP_BINDINGS, ConnectionBackend} from 'angular2/http';
import { ROUTER_DIRECTIVES,RouterLink, RouteConfig, Location,
         ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
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
    utilisateurAEditer:any={name:"",email:"",roles:['User','Manager'], id:7};
    edition:boolean=false;
     
    
    constructor(utilisateurService:UtilisateurService, location: Location) {
        utilisateurService.getUtilisateurs().subscribe(people => this.utilisateurs = people);
      
    }
    enregistrer(ajoutFrom:any){
        console.log(JSON.stringify(ajoutFrom));
        var u= ajoutFrom.infoUtilisateur;//var temporaire pour simulation
            u.id=7;
            u.roles=[ajoutFrom.infoUtilisateur.roles]
        this.utilisateurs.push(u);
        this.edition=false;
        u=null;
        ajoutFrom=null;
    }
    ajouter(){
        this.edition=true;       
    }
    edit(utilisateur:any){
        this.edition=true;
        this.utilisateurAEditer=utilisateur;    
        
    }
    supprimer(utilisateurASupp:any){
       this.utilisateurs = _.reject(this.utilisateurs, function(u){ return u.email === utilisateurASupp.email; });
    }
    fermerEdition(){
        this.edition=false;
    }
}
 