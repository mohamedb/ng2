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
var UtilisateurService_1 = require('../services/UtilisateurService');
var AddTaskFormDirective = (function () {
    //people: Array<any>;
    function AddTaskFormDirective(utilisateurService) {
        var _this = this;
        this.taskAdded = new angular2_1.EventEmitter();
        this.email = "t";
        this.erreurInput = "";
        utilisateurService.getUtilisateurs().subscribe(function (listeUtilisateurs) { return _this.utilisateurs = listeUtilisateurs; });
    }
    AddTaskFormDirective.prototype.onSubmit = function (formulaireData) {
        this.erreurInput = "";
        console.log(JSON.stringify(formulaireData, null, 2));
        //var resp=[user.value,task.value,"ko"];
        /*if(user.value.length<2 || task.value.length <2 || utilisateur.value==''){
            this.erreurInput= "Merci de vérifier le formulaire";
            $event.preventDefault();
            return 0;
        }
        console.log("user =>: "+user.value);
        this.taskAdded.next({name:user.value,task:task.value}); */
        //$event.preventDefault();  
    };
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], AddTaskFormDirective.prototype, "taskAdded");
    AddTaskFormDirective = __decorate([
        angular2_1.Component({
            selector: 'add-task',
            providers: [UtilisateurService_1.UtilisateurService]
        }),
        angular2_1.View({
            template: "\n\t<div class=\"col-md-12 well\" >\n\t <b>Ajouter une tache </b> <br>\n\t\t<form #f=\"form\" (ng-submit)=\"onSubmit(f.value)\">\n\t\t  <div ng-control-group=\"tache\">\n\t\t \t<p>\n\t\t\tT\u00E2che : <input type=\"text\" ng-control=\"titre\" />\n\t\t\t</p>\n\t\t    <p>\n\t\t\tAssign\u00E9e \u00E0: \n\t\t\t<select ng-control=\"executeur\">\n\t\t\t  <option   *ng-for=\"#u of utilisateurs\" [value]=\"u.name\">{{u.name}} <i>{{u.email}}</i></option>\n\t\t    </select>\n\t\t\t</p>\n\t\t\t<b style=\"color:red\"> {{erreurInput}} </b><br>\n\t\t\t</div>\n\t\t\t<button type='submit'>Enregistrer</button>\t \n\t\t</form>\n\t</div>\n\t",
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [UtilisateurService_1.UtilisateurService])
    ], AddTaskFormDirective);
    return AddTaskFormDirective;
})();
exports.AddTaskFormDirective = AddTaskFormDirective;
//# sourceMappingURL=AddTaskFormDirective.js.map