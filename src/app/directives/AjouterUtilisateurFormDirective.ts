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
	templateUrl:'app/directives/views/ajouterUtilisateurForm.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
/**
 * Pour une exemple ou y a une construction dans la template
 * @see le Plunker ici: http://plnkr.co/edit/lhj9sZ4sNCh0eC7ZsIl6?p=preview
 */
export class AjouterUtilisateurFormDirective {

	@Input() utilisateur: any;
    @Output() enregistrement = new EventEmitter();
	
	ctrlName: Control = new Control(" ", Validators.required);
	ctrlEmail: Control = new Control('', Validators.required);
	ctrlRoles: Control = new Control('Manager', Validators.required);
	formGroup: ControlGroup;
	erreurInput: string = "";
	constructor(utlisateurService: UtilisateurService) {
		this.formGroup = new ControlGroup({
			infoUtilisateur: new ControlGroup({
				name: this.ctrlName,
				email: this.ctrlEmail,
				roles: this.ctrlRoles 
			})

		})
	}
    enregistrer($event: any) {
		console.log(JSON.stringify(this.formGroup.value,null, 2));
		this.erreurInput = "";
		 
		this.enregistrement.next(this.formGroup.value); 
		//$event.preventDefault();  
	}
}