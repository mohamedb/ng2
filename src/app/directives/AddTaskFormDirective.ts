import {Component, View, NgFor, Input,Output,EventEmitter, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import {UtilisateurService} from '../services/UtilisateurService';
import {FrDatetime} from '../services/Utils';
import {DatePicker} from './DatePicker';
@Component({
	selector: 'add-task',
	providers: [UtilisateurService,FrDatetime]

}) 
@View({
	templateUrl: 'app/directives/views/ajouterTacheForm.html',
	directives: [NgFor,NgModel, FORM_DIRECTIVES,DatePicker]
})
export class AddTaskFormDirective {
	utilisateurs: Array<any>;	 
	@Output() taskAdded = new EventEmitter();
	datetimeDebut:string; 
	erreurInput:string="";
	//people: Array<any>;
	
	constructor(utilisateurService:UtilisateurService,frDatetime:FrDatetime){
		 utilisateurService.getUtilisateurs().subscribe(listeUtilisateurs => this.utilisateurs = listeUtilisateurs);
		 jQuery('#datetimepicker1').datetimepicker(
			 {      
                    locale:'fr',
					daysOfWeekDisabled: [0, 6]
              }
		 );
		 this.datetimeDebut=frDatetime.setDate(new Date()).toString();
	}
    onSubmit(formulaireData:any) {
		this.erreurInput="";
		console.log(JSON.stringify(formulaireData,null, 2));
		console.log("dateDebut"+this.datetimeDebut)
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
	update($event:any,d){		 		 	
		  console.log("directive @dateInitiale: "+ d.value);
		  this.datetimeDebut=d.value;	  	 		 		 
	}
}