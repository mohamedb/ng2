/// <reference path="../../services/TaskService.ts"/>
/// <reference path="../../models/TaskModel.ts"/>
/// <reference path="../../../../typings/tsd.d.ts"/>
/// <reference path="../../../../typings/underscore/underscore.d.ts"/>
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
var UtilisateurService_1 = require('../../services/UtilisateurService');
var AjouterUtilisateurFormDirective_1 = require('../../directives/AjouterUtilisateurFormDirective');
var Users = (function () {
    function Users(utilisateurService, location) {
        var _this = this;
        this.utilisateurAEditer = { name: "", email: "", roles: ['User', 'Manager'], id: 7 };
        this.edition = false;
        utilisateurService.getUtilisateurs().subscribe(function (people) { return _this.utilisateurs = people; });
    }
    Users.prototype.enregistrer = function (ajoutFrom) {
        console.log(JSON.stringify(ajoutFrom));
        var u = ajoutFrom.infoUtilisateur; //var temporaire pour simulation
        u.id = 7;
        u.roles = [ajoutFrom.infoUtilisateur.roles];
        this.utilisateurs.push(u);
        this.edition = false;
        u = null;
        ajoutFrom = null;
    };
    Users.prototype.ajouter = function () {
        this.edition = true;
    };
    Users.prototype.edit = function (utilisateur) {
        this.edition = true;
        this.utilisateurAEditer = utilisateur;
    };
    Users.prototype.supprimer = function (utilisateurASupp) {
        this.utilisateurs = _.reject(this.utilisateurs, function (u) { return u.email === utilisateurASupp.email; });
    };
    Users.prototype.fermerEdition = function () {
        this.edition = false;
    };
    Users = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [UtilisateurService_1.UtilisateurService, router_1.RouterLink, router_1.Location]
        }),
        angular2_1.View({
            templateUrl: 'app/components/users/users.html',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, AjouterUtilisateurFormDirective_1.AjouterUtilisateurFormDirective]
        }), 
        __metadata('design:paramtypes', [UtilisateurService_1.UtilisateurService, router_1.Location])
    ], Users);
    return Users;
})();
exports.Users = Users;
//# sourceMappingURL=Users.js.map