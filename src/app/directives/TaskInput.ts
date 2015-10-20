import {Component, View, NgFor, Input,Output,EventEmitter, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import {PeopleService} from '../services/peopleService';
@Component({
	selector: 'add-task',
	providers: [PeopleService]

})
@View({
	template: `
	<div class="col-md-6 well" >
	 <b>Add task </b> <br>
		<form>
			<div class="form-group">		
			Tâche : <input type="text" #task class="form-control" />   <br>
			Assignée à: <input type="text" #user class="form-control" /><br>
			<!-- <input [ng-model]="email" (ng-model-change)="email=$event"></input> {{email}} -->
			<b style="color:red"> {{erreurInput}} </b><br>
			<button (click)="saveTask($event,user,task)"> Ajouter </button>	
			</div>	
		</form>
	</div>
	`,
	directives: [NgFor,NgModel, FORM_DIRECTIVES]
})
export class TaskInput {
	@Input() people: Array<any>;	 
	@Output() taskAdded = new EventEmitter();
	email: string = "t";
	 
	erreurInput:string="";
	//people: Array<any>;
	
	constructor(peopleService:PeopleService){
		// setInterval(() => this.everySecond.next("event"), 1000);
		 // peopleService.getPeople().subscribe(people => this.people = people);
	}
    saveTask($event: any, user: any, task: any) {
		this.erreurInput="";
		//var resp=[user.value,task.value,"ko"];
		if(user.value.length<2 || task.value.length <2){
			this.erreurInput= "Merci de vérifier le formulaire";
			$event.preventDefault();  
			return 0;
		}
		console.log("user =>: "+user.value);		
		this.taskAdded.next({name:user.value,task:task.value}); 
		$event.preventDefault();  
	}
}