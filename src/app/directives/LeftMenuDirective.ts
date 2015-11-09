import {Component, View,CORE_DIRECTIVES, Input, Output, FORM_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouterLink, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';
@Component({
	selector: 'left-menu',
	providers: [RouterLink, Location]

})
@View({
	templateUrl: "app/directives/views/leftMenu.html", 
	directives: [ CORE_DIRECTIVES,FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class LeftMenuDirective {
	@Input() elements: Array<any>;	 
	location: Location;
    visible:boolean =true;
   

    constructor(location: Location) {
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
    showMenu(){
        this.visible=true;
    }
    hideMenu(){
        this.visible=false;
    }
    setEtat(etat:boolean){
        this.visible=etat;
    }
    flip(){
        this.visible=!this.visible;
    }

}