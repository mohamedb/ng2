import {Component, View, NgFor, Input, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
	selector: 'add-task',

})
@View({
	template: `
	<form>
		<input type="text" #user /> {{user.value}} <br>
		<input type="text" #task /> {{task.value}} <br>
		<input [ng-model]="email" (ng-model-change)="email=$event"></input> {{email}}

		<button (click)="saveTask($event,user,task)"> Save </button>
	</form>
	`,
	directives: [NgModel, FORM_DIRECTIVES]
})
export class TaskInput {
	email: string = "t";
    saveTask($event: any, user: any, task: any) {
		$event.preventDefault();
		console.log("User: " + user.value + "\n taskTitle: " + task.value);

	}
}