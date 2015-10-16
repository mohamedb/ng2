/// <reference path="../models/TaskModel.ts"/>
var TaskModel_1 = require('app/models/TaskModel');
var TaskService = (function () {
    function TaskService() {
        this.tasks = [new TaskModel_1.TaskModel("Med", "Update server"), new TaskModel_1.TaskModel("SLH", "Translate Msg")];
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    return TaskService;
})();
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map