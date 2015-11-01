
// <reference path="../../../typings/tsd.d.ts"/>
/// <reference path="../../../typings/bootstrap.v3.datetimepicker/bootstrap.v3.datetimepicker.d.ts"/>
import {Component,OnChanges,SimpleChange, HostListener, View, NgFor, Input,Output,EventEmitter, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import {UtilisateurService} from '../services/UtilisateurService';
@Component({
	selector: 'input-datetime',
	providers: [UtilisateurService]

}) 
@View({
	template: `
	<p>	
	 DatePickerDirective:
	   <input type='text'
					  id='datetimepicker1'
					  #d
					  [value]="dateInitiale"
					  (keyup)="update($event,d)"
					  
					 />
	</p>
	`,
	directives: [NgFor,NgModel, FORM_DIRECTIVES]
})
export class DatePicker {
    @Input() dateInitiale:any;	 //le binding s'arrete ici! car Moment.js lib utulise Clone
	@Output() updateDate = new EventEmitter();	 
	v:any;
	constructor(){
		 console.log("datepicker directive est chargée !");
		 jQuery('#datetimepicker1').datetimepicker(
			 {      
                    locale:'fr',
					daysOfWeekDisabled: [0, 6]
              }
		 );
		  
		
	}
	update($event:any,d){		 
		 	
		  console.log("directive @dateInitiale: "+ d.value);	
		  this.updateDate.next({d:d.value});	 		 		 
	}
  
}