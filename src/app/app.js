/// <reference path="services/TaskService.ts"/>
/// <reference path="models/TaskModel.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var TaskService_1 = require('./services/TaskService');
var peopleService_1 = require('./services/peopleService');
var TaskInput_1 = require('./directives/TaskInput');
var Users_1 = require('./components/users/Users');
var Index_1 = require('./components/index/Index');
var LeftMenuDirective_1 = require('./directives/LeftMenuDirective');
var AppComponent = (function () {
    function AppComponent(taskS, location) {
        this.tasks = taskS.getTasks();
        this.location = location;
    }
    AppComponent.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [TaskService_1.TaskService, peopleService_1.PeopleService, router_1.RouterLink, router_1.Location]
        }),
        angular2_1.View({
            templateUrl: 'app/views/firstPage.html',
            directives: [angular2_1.NgFor, TaskInput_1.TaskInput, router_1.ROUTER_DIRECTIVES, LeftMenuDirective_1.LeftMenuDirective]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: Index_1.Index, as: 'Index' }),
            new router_1.Route({ path: '/users', component: Users_1.Users, as: 'Users' })
        ]), 
        __metadata('design:paramtypes', [TaskService_1.TaskService, router_1.Location])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [http_1.HTTP_BINDINGS, router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map