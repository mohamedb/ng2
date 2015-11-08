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
var Utils_1 = require('../services/Utils');
var DatePicker_1 = require('./DatePicker');
var AjouterTacheFormDirective = (function () {
    //people: Array<any>;
    function AjouterTacheFormDirective(utilisateurService, frDatetime) {
        var _this = this;
        this.taskAdded = new angular2_1.EventEmitter();
        this.erreurInput = "";
        utilisateurService.getUtilisateurs().subscribe(function (listeUtilisateurs) { return _this.utilisateurs = listeUtilisateurs; });
        jQuery('#datetimepicker1').datetimepicker({
            locale: 'fr',
            daysOfWeekDisabled: [0, 6]
        });
        this.datetimeDebut = frDatetime.setDate(new Date()).toString();
    }
    AjouterTacheFormDirective.prototype.onSubmit = function (formulaireData) {
        this.erreurInput = "";
        console.log(JSON.stringify(formulaireData, null, 2));
        console.log("dateDebut" + this.datetimeDebut);
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
    AjouterTacheFormDirective.prototype.update = function ($event, d) {
        console.log("directive @dateInitiale: " + d.value);
        this.datetimeDebut = d.value;
    };
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], AjouterTacheFormDirective.prototype, "taskAdded");
    AjouterTacheFormDirective = __decorate([
        angular2_1.Component({
            selector: 'add-task',
            providers: [UtilisateurService_1.UtilisateurService, Utils_1.FrDatetime]
        }),
        angular2_1.View({
            templateUrl: 'app/directives/views/ajouterTacheForm.html',
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.FORM_DIRECTIVES, DatePicker_1.DatePicker]
        }), 
        __metadata('design:paramtypes', [UtilisateurService_1.UtilisateurService, Utils_1.FrDatetime])
    ], AjouterTacheFormDirective);
    return AjouterTacheFormDirective;
})();
exports.AjouterTacheFormDirective = AjouterTacheFormDirective;
//# sourceMappingURL=AjouterTacheFormDirective.js.map