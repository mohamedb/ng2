import {Component,CORE_DIRECTIVES, View, Input, Output, EventEmitter, NgModel,HostListener, FORM_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouterLink, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
@Component({
	selector: 'notification',
	providers: [RouterLink, Location]

})
@View({
	template: `
	 <div *ng-if="notificationMessage.length!=0" id="notification">
        <div id="notificationBody">
            <div class="pull-left" id="notificationText">
               {{notificationMessage}}
            </div>
            <div class="pull-right" id="notificationControl"> 
              <button  class="btn btn-xs"> X </button>
            </div>
        </div>
    </div> 
	`,	
	directives: [CORE_DIRECTIVES, NgModel, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class NotificationDirective {	
	@Input() notificationMessage:string;
	@Output() initMessage = new EventEmitter();
	hidden:boolean=false; 
	/**
	 * Le listener permet de capturer l evenement clic sur tout l element 
	 * a changer par un evenement specifique au moment de l'ajout d'autre clics
	 */
	@HostListener('click', ['$event.target'])
	onClick(elementClicked) {		 
		this.initMessage.next('init');
	}
	constructor(){
		 
	}
	setNotificationMessage(message:any){
		this.notificationMessage=message;
	}
	setMessage(message:string){
		this.notificationMessage=message;
	}
	
	updateMessage(message:any){
		this.notificationMessage=message;
		console.log("New message:"+this.notificationMessage);
	}    

}