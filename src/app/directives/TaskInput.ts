import {Component, View, NgFor, Input, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import {PeopleService} from '../services/peopleService';
@Component({
	selector: 'add-task',
	providers: [PeopleService]

})
@View({
	template: `
	<form>
		<input type="text" #user /> {{user.value}} <br>
		<input type="text" #task /> {{task.value}} <br>
		<input [ng-model]="email" (ng-model-change)="email=$event"></input> {{email}}
		<button (click)="saveTask($event,user,task)"> Save </button>		
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
	email: string = "t";
	people: Array<any>;
	constructor(peopleService:PeopleService){
		  peopleService.getPeople().subscribe(people => this.people = people);
	}
    saveTask($event: any, user: any, task: any) {
		$event.preventDefault();
		console.log("User: " + user.value + "\n taskTitle: " + task.value);
		this.people.push({name:user.value});

	}
}