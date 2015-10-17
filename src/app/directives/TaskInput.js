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
var TaskInput = (function () {
    function TaskInput() {
        this.email = "t";
    }
    TaskInput.prototype.saveTask = function ($event, user, task) {
        $event.preventDefault();
        console.log("User: " + user.value + "\n taskTitle: " + task.value);
    };
    TaskInput = __decorate([
        angular2_1.Component({
            selector: 'add-task',
        }),
        angular2_1.View({
            template: "\n\t<form>\n\t\t<input type=\"text\" #user /> {{user.value}} <br>\n\t\t<input type=\"text\" #task /> {{task.value}} <br>\n\t\t<input [ng-model]=\"email\" (ng-model-change)=\"email=$event\"></input> {{email}}\n\n\t\t<button (click)=\"saveTask($event,user,task)\"> Save </button>\n\t</form>\n\t",
            directives: [angular2_1.NgModel, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TaskInput);
    return TaskInput;
})();
exports.TaskInput = TaskInput;
//# sourceMappingURL=TaskInput.js.map