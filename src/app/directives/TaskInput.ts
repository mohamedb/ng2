import {Component, View, NgFor, Input,Output,EventEmitter, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import {PeopleService} from '../services/peopleService';
@Component({
	selector: 'add-task',
	providers: [PeopleService]

})
@View({
	template: `
	<b>Add task </b> <br>
	<form>
	    <div class="form-group">
		User: <input type="text" #user class="form-control" /> {{user.value}} <br>
		Task title: <input type="text" #task class="form-control" /> {{task.value}} <br>
		<!-- <input [ng-model]="email" (ng-model-change)="email=$event"></input> {{email}} -->
		<button (click)="saveTask($event,user,task)"> Save </button>	
		</div>	
	</form>
	<br>
	<div>
    <h6>People: </h6>
    <ul>
        <li *ng-for="#user of people">
            {{user.name}}
        </li>
    </ul>
</div>
	`,
	directives: [NgFor,NgModel, FORM_DIRECTIVES]
})
export class TaskInput {
	@Input() people: Array<any>;	 
	@Output() everySecond = new EventEmitter();
	email: string = "t";
	//people: Array<any>;
	
	constructor(peopleService:PeopleService){
		// setInterval(() => this.everySecond.next("event"), 1000);
		 // peopleService.getPeople().subscribe(people => this.people = people);
	}
    saveTask($event: any, user: any, task: any) {
		var resp=[user.value,task.value,"ko"];
		console.log("user =>: "+user.value);		
		this.everySecond.next(resp); 
		$event.preventDefault();  
}