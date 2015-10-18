/// <reference path="../../services/TaskService.ts"/>
/// <reference path="../../models/TaskModel.ts"/>
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
var router_1 = require('angular2/router');
var TaskService_1 = require('../../services/TaskService');
var peopleService_1 = require('../../services/peopleService');
var TaskInput_1 = require('../../directives/TaskInput');
var Index = (function () {
    function Index(taskS, location, peopleService) {
        var _this = this;
        peopleService.getPeople().subscribe(function (people) { return _this.people = people; });
        this.location = location;
    }
    Index.prototype.everySecond = function (obj) {
        console.log('called! .next=> ' + JSON.stringify(obj));
    };
    Index.prototype.saveTask = function ($event, user, task) {
        $event.preventDefault();
        console.log("User: " + user.value + "\n taskTitle: " + task.value);
        this.people.push({ name: user.value });
    };
    Index = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [TaskService_1.TaskService, peopleService_1.PeopleService, router_1.RouterLink, router_1.Location]
        }),
        angular2_1.View({
            templateUrl: 'app/components/index/index.html',
            directives: [angular2_1.NgFor, TaskInput_1.TaskInput, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [TaskService_1.TaskService, router_1.Location, peopleService_1.PeopleService])
    ], Index);
    return Index;
})();
exports.Index = Index;
//# sourceMappingURL=Index.js.map