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
var TaskService_1 = require('./services/TaskService');
var peopleService_1 = require('./services/peopleService');
var TaskInput_1 = require('./directives/TaskInput');
var AppComponent = (function () {
    // people: Array<any>;
    function AppComponent(taskS /*, peopleService: PeopleService*/) {
        this.tasks = taskS.getTasks();
        // peopleService.getPeople().subscribe(people => this.people = people);
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [TaskService_1.TaskService, peopleService_1.PeopleService]
        }),
        angular2_1.View({
            templateUrl: 'app/views/tasksList.html',
            directives: [angular2_1.NgFor, TaskInput_1.TaskInput]
        }), 
        __metadata('design:paramtypes', [TaskService_1.TaskService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [http_1.HTTP_BINDINGS]);
//# sourceMappingURL=app.js.map