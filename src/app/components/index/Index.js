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
var UtilisateurService_1 = require('../../services/UtilisateurService');
var AddTaskFormDirective_1 = require('../../directives/AddTaskFormDirective');
var NotificationDirective_1 = require('../../directives/NotificationDirective');
var Index = (function () {
    function Index(taskS, location, peopleService) {
        this.people = [];
        this.notificationMessage = "";
        //peopleService.getPeople().subscribe(people => this.people = people);
        this.people.push({ task: "Préparer la Doc", name: "MED" });
        this.location = location;
    }
    Index.prototype.initMessageEventReceiver = function () {
        this.notificationMessage = "";
    };
    /**
     * Distinguer les fonctions "Intercepter" les evenements provenant d'autres Compoenents
     */
    Index.prototype.pushTaskEventReceiver = function (obj) {
        console.log('called! .next=> ' + JSON.stringify(obj));
        this.people.push({ name: obj.name, task: obj.task });
        this.notificationMessage = "Ajout avec succès";
    };
    Index = __decorate([
        angular2_1.Component({
            selector: 'index-page',
            providers: [TaskService_1.TaskService, UtilisateurService_1.UtilisateurService, router_1.RouterLink, router_1.Location]
        }),
        angular2_1.View({
            templateUrl: 'app/components/index/index.html',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, AddTaskFormDirective_1.AddTaskFormDirective, NotificationDirective_1.NotificationDirective]
        }), 
        __metadata('design:paramtypes', [TaskService_1.TaskService, router_1.Location, UtilisateurService_1.UtilisateurService])
    ], Index);
    return Index;
})();
exports.Index = Index;
//# sourceMappingURL=Index.js.map