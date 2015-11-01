import {Component, View, NgFor, Input,Output,EventEmitter, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import {UtilisateurService} from '../services/UtilisateurService';
@Component({
	selector: 'add-task',
	providers: [UtilisateurService]

}) 
@View({
	template: `
	<div class="col-md-12 well" >
	 <b>Ajouter une tache </b> <br>
		<form #f="form" (ng-submit)="onSubmit(f.value)">
		  <div ng-control-group="tache">
		 	<p>
			Tâche : <input type="text" ng-control="titre" />
			</p>
		    <p>
			Assignée à: 
			<select ng-control="executeur">
			  <option   *ng-for="#u of utilisateurs" [value]="u.name">{{u.name}} <i>{{u.email}}</i></option>
		    </select>
			</p>
			<b style="color:red"> {{erreurInput}} </b><br>
			</div>
			<button type='submit'>Enregistrer</button>	 
		</form>
	</div>
	`,
	directives: [NgFor,NgModel, FORM_DIRECTIVES]
})
export class AddTaskFormDirective {
	utilisateurs: Array<any>;	 
	@Output() taskAdded = new EventEmitter();
	email: string = "t";
	 
	erreurInput:string="";
	//people: Array<any>;
	
	constructor(utilisateurService:UtilisateurService){
		 utilisateurService.getUtilisateurs().subscribe(listeUtilisateurs => this.utilisateurs = listeUtilisateurs);
	}
    onSubmit(formulaireData:any) {
		this.erreurInput="";
		console.log(JSON.stringify(formulaireData,null, 2));
		//var resp=[user.value,task.value,"ko"];
		/*if(user.value.length<2 || task.value.length <2 || utilisateur.value==''){
			this.erreurInput= "Merci de vérifier le formulaire";
			$event.preventDefault();  
			return 0;
		}
		console.log("user =>: "+user.value);		
		this.taskAdded.next({name:user.value,task:task.value}); */
		//$event.preventDefault();  
	}
}