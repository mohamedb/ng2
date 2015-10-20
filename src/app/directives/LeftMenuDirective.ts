import {Component, View, NgFor, Input, Output, EventEmitter, NgModel, FORM_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouterLink, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
@Component({
	selector: 'left-menu',
	providers: [RouterLink, Location]

})
@View({
	templateUrl: "app/views/leftMenu.html",
	directives: [NgFor, NgModel, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class LeftMenuDirective {
	@Input() elements: Array<any>;
	@Output() everySecond = new EventEmitter();
	location: Location;

    tasks: Array<any>;

    constructor(location: Location) {
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
    updateMenu($event: any, someData: any) {
		console.log("user =>: " + someData.value);
		this.everySecond.next({ "ABC": "XYZ" });
	}

}