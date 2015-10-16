/// <reference path="../models/TaskModel.ts"/>
var TaskModel_1 = require('../models/TaskModel');
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        this.tasks = [new TaskModel_1.TaskModel("MED", "API DOC"), new TaskModel_1.TaskModel("MIA", "PPT PRES")];
        return this.tasks;
    };
    return TaskService;
})();
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map