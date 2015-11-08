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
        this.enregistrement = new angular2_1.EventEmitter();
        this.ctrlName = new angular2_1.Control(" ", angular2_1.Validators.required);
        this.ctrlEmail = new angular2_1.Control('', angular2_1.Validators.required);
        this.ctrlRoles = new angular2_1.Control('Manager', angular2_1.Validators.required);
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
        this.enregistrement.next(this.formGroup.value);
        //$event.preventDefault();  
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], AjouterUtilisateurFormDirective.prototype, "utilisateur");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], AjouterUtilisateurFormDirective.prototype, "enregistrement");
    AjouterUtilisateurFormDirective = __decorate([
        angular2_1.Component({
            selector: 'ajouter-utilisateur-form',
            providers: [UtilisateurService_1.UtilisateurService]
        }),
        angular2_1.View({
            templateUrl: 'app/directives/views/ajouterUtilisateurForm.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [UtilisateurService_1.UtilisateurService])
    ], AjouterUtilisateurFormDirective);
    return AjouterUtilisateurFormDirective;
})();
exports.AjouterUtilisateurFormDirective = AjouterUtilisateurFormDirective;
//# sourceMappingURL=AjouterUtilisateurFormDirective.js.map