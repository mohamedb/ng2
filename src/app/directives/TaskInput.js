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
        this.taskAdded = new angular2_1.EventEmitter();
        this.email = "t";
        this.erreurInput = "";
        // setInterval(() => this.everySecond.next("event"), 1000);
        // peopleService.getPeople().subscribe(people => this.people = people);
    }
    TaskInput.prototype.saveTask = function ($event, user, task) {
        this.erreurInput = "";
        //var resp=[user.value,task.value,"ko"];
        if (user.value.length < 2 || task.value.length < 2) {
            this.erreurInput = "Merci de vérifier le formulaire";
            $event.preventDefault();
            return 0;
        }
        console.log("user =>: " + user.value);
        this.taskAdded.next({ name: user.value, task: task.value });
        $event.preventDefault();
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], TaskInput.prototype, "people");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], TaskInput.prototype, "taskAdded");
    TaskInput = __decorate([
        angular2_1.Component({
            selector: 'add-task',
            providers: [peopleService_1.PeopleService]
        }),
        angular2_1.View({
            template: "\n\t<div class=\"col-md-6 well\" >\n\t <b>Add task </b> <br>\n\t\t<form>\n\t\t\t<div class=\"form-group\">\t\t\n\t\t\tT\u00E2che : <input type=\"text\" #task class=\"form-control\" />   <br>\n\t\t\tAssign\u00E9e \u00E0: <input type=\"text\" #user class=\"form-control\" /><br>\n\t\t\t<!-- <input [ng-model]=\"email\" (ng-model-change)=\"email=$event\"></input> {{email}} -->\n\t\t\t<b style=\"color:red\"> {{erreurInput}} </b><br>\n\t\t\t<button (click)=\"saveTask($event,user,task)\"> Ajouter </button>\t\n\t\t\t</div>\t\n\t\t</form>\n\t</div>\n\t",
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [peopleService_1.PeopleService])
    ], TaskInput);
    return TaskInput;
})();
exports.TaskInput = TaskInput;
//# sourceMappingURL=TaskInput.js.map