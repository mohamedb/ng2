import {Component, Control,
ControlGroup,
ControlArray,
Validators, View, CORE_DIRECTIVES, NgFor, Input, Output, EventEmitter, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import {UtilisateurService} from '../services/UtilisateurService';
@Component({
	selector: 'ajouter-utilisateur-form',
	providers: [UtilisateurService]

})
@View({
	template: `
	 
   
	<div>
	<div class="well" >
	
	    <b *ng-if="utilisateur">Edition de: {{utilisateur.name}}	</b>
		<form [ng-form-model]="formGroup">
        <div ng-control-group="infoUtilisateur">
          <h3>Informations personnelles:</h3>
          <p>Nom:   <input ng-control="name" [(ng-model)]='utilisateur.name' ><span *ng-if="!ctrlName.valid" > [required]</span></p>
          <p>Email: <input ng-control="email" [(ng-model)]='utilisateur.email' ><span *ng-if="!ctrlEmail.valid"> [required]</span></p>
        </div>
		<button (click)="enregistrer()">Enregistrer </button>
      </form>
	</div>
	</div>
	`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AjouterUtilisateurFormDirective {

	@Input() utilisateur: any;

	ctrlName: Control = new Control(" ", Validators.required);
	ctrlEmail: Control = new Control('', Validators.required);
	formGroup: ControlGroup;
	
	
	
	
	//@Output() taskAdded = new EventEmitter();	 
	erreurInput: string = "";
	constructor(utlisateurService: UtilisateurService) {
		this.formGroup = new ControlGroup({
			infoUtilisateur: new ControlGroup({
				name: this.ctrlName,
				email: this.ctrlEmail
			})

		})
	}
    enregistrer($event: any) {
		this.erreurInput = "";
		console.log(JSON.stringify(this.utilisateur));	
		//var resp=[user.value,task.value,"ko"];
		/*if(utilisateur.name.length <2 || utilisateur.email.length <2 ){
			this.erreurInput= "Merci de vérifier le formulaire";
			$event.preventDefault();  
			return 2;
		}
		*/
		//this.taskAdded.next({name:user.value,task:task.value}); 
		//$event.preventDefault();  
	}
}