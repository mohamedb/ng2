import {Component, View, NgFor, Input, Output, EventEmitter, NgModel,HostListener, FORM_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouterLink, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
import {NotificationDirective} from './NotificationDirective'
@Component({
	selector: 'left-menu',
	providers: [RouterLink, Location]

})
@View({
	templateUrl: "app/views/topMenu.html",
	directives: [NgFor, NgModel, FORM_DIRECTIVES, ROUTER_DIRECTIVES,NotificationDirective]
})
export class TopMenuDirective {	 
	 
	location: Location;
    constructor(location: Location) {
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
     

}