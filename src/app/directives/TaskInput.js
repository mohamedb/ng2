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
var peopleService_1 = require('../services/peopleService');
var TaskInput = (function () {
    //people: Array<any>;
    function TaskInput(peopleService) {
        this.email = "t";
        // peopleService.getPeople().subscribe(people => this.people = people);
    }
    TaskInput.prototype.saveTask = function ($event, user, task) {
        $event.preventDefault();
        console.log("User: " + user.value + "\n taskTitle: " + task.value);
        this.people.push({ name: user.value });
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], TaskInput.prototype, "people");
    TaskInput = __decorate([
        angular2_1.Component({
            selector: 'add-task',
            providers: [peopleService_1.PeopleService]
        }),
        angular2_1.View({
            template: "\n\t<b>Add task </b> <br>\n\t<form>\n\t    <div class=\"form-group\">\n\t\tUser: <input type=\"text\" #user class=\"form-control\" /> {{user.value}} <br>\n\t\tTask title: <input type=\"text\" #task class=\"form-control\" /> {{task.value}} <br>\n\t\t<!-- <input [ng-model]=\"email\" (ng-model-change)=\"email=$event\"></input> {{email}} -->\n\t\t<button (click)=\"saveTask($event,user,task)\"> Save </button>\t\n\t\t</div>\t\n\t</form>\n\t<br>\n\t<div>\n    <h6>People: </h6>\n    <ul>\n        <li *ng-for=\"#user of people\">\n            {{user.name}}\n        </li>\n    </ul>\n</div>\n\t",
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [peopleService_1.PeopleService])
    ], TaskInput);
    return TaskInput;
})();
exports.TaskInput = TaskInput;
//# sourceMappingURL=TaskInput.js.map