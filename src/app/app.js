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
var TaskService_1 = require('services/TaskService');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.tasks = taskService.getTasks();
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'app/views/tasksList.html',
            directives: [angular2_1.NgFor],
            appInjector: [TaskService_1.TaskService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof TaskService_1.TaskService !== 'undefined' && TaskService_1.TaskService) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map