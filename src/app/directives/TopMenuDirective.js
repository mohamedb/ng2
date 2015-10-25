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
var NotificationDirective_1 = require('./NotificationDirective');
var TopMenuDirective = (function () {
    function TopMenuDirective(location) {
        this.location = location;
    }
    TopMenuDirective.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    TopMenuDirective = __decorate([
        angular2_1.Component({
            selector: 'left-menu',
            providers: [router_1.RouterLink, router_1.Location]
        }),
        angular2_1.View({
            templateUrl: "app/views/topMenu.html",
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, NotificationDirective_1.NotificationDirective]
        }), 
        __metadata('design:paramtypes', [router_1.Location])
    ], TopMenuDirective);
    return TopMenuDirective;
})();
exports.TopMenuDirective = TopMenuDirective;
//# sourceMappingURL=TopMenuDirective.js.map