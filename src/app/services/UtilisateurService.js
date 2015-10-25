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
//a simple service
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var UtilisateurService = (function () {
    function UtilisateurService(http) {
        this.dataUrl = 'app/data/users.json';
        this.utilisateurs = http.get(this.dataUrl).map(function (res) { return res.json(); });
    }
    UtilisateurService.prototype.getUtilisateurs = function () {
        return this.utilisateurs;
    };
    UtilisateurService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UtilisateurService);
    return UtilisateurService;
})();
exports.UtilisateurService = UtilisateurService;
//# sourceMappingURL=UtilisateurService.js.map