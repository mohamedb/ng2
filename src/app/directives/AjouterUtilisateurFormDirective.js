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
var AjouterUtilisateurFormDirective = (function () {
    function AjouterUtilisateurFormDirective(utlisateurService) {
        this.ctrlName = new angular2_1.Control(" ", angular2_1.Validators.required);
        this.ctrlEmail = new angular2_1.Control('', angular2_1.Validators.required);
        this.ctrlRoles = new angular2_1.Control('Manager', angular2_1.Validators.required);
        //@Output() taskAdded = new EventEmitter();	 
        this.erreurInput = "";
        this.formGroup = new angular2_1.ControlGroup({
            infoUtilisateur: new angular2_1.ControlGroup({
                name: this.ctrlName,
                email: this.ctrlEmail,
                roles: this.ctrlRoles
            })
        });
    }
    AjouterUtilisateurFormDirective.prototype.enregistrer = function ($event) {
        console.log(JSON.stringify(this.formGroup.value, null, 2));
        this.erreurInput = "";
        //console.log(JSON.stringify(this.utilisateur));	
        //var resp=[user.value,task.value,"ko"];
        /*if(utilisateur.name.length <2 || utilisateur.email.length <2 ){
            this.erreurInput= "Merci de vérifier le formulaire";
            $event.preventDefault();
            return 2;
        }
        */
        //this.taskAdded.next({name:user.value,task:task.value}); 
        //$event.preventDefault();  
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], AjouterUtilisateurFormDirective.prototype, "utilisateur");
    AjouterUtilisateurFormDirective = __decorate([
        angular2_1.Component({
            selector: 'ajouter-utilisateur-form',
            providers: [UtilisateurService_1.UtilisateurService]
        }),
        angular2_1.View({
            template: "\n\t<div>\n\t<div class=\"well\" >\n\t    <b *ng-if=\"utilisateur\">Edition de: {{utilisateur.name}}\t</b>\n\t\t<form [ng-form-model]=\"formGroup\">\n        <div ng-control-group=\"infoUtilisateur\">\n          <h3>Informations personnelles:</h3>\n          <p>Nom:   <input ng-control=\"name\" [(ng-model)]='utilisateur.name' ><span *ng-if=\"!ctrlName.valid\" > [required]</span></p>\n          <p>Email: <input ng-control=\"email\" [(ng-model)]='utilisateur.email' ><span *ng-if=\"!ctrlEmail.valid\"> [required]</span></p>\n\t\t  <p>R\u00F4le: \n\t\t  <select ng-control=\"roles\">\n\t\t\t<option *ng-for=\"#r of utilisateur.roles\">{{r}}</option>\n\t\t  </select>\n\t\t  <p>\n        </div>\n\t\t<button (click)=\"enregistrer()\">Enregistrer </button>\n      </form>\n\t</div>\n\t</div>\n\t",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [UtilisateurService_1.UtilisateurService])
    ], AjouterUtilisateurFormDirective);
    return AjouterUtilisateurFormDirective;
})();
exports.AjouterUtilisateurFormDirective = AjouterUtilisateurFormDirective;
//# sourceMappingURL=AjouterUtilisateurFormDirective.js.map