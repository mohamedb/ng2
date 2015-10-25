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
var NotificationService = (function () {
    function NotificationService() {
        this.hidden = true;
        this.message = "Init...";
    }
    NotificationService.prototype.setRefNotificationDirective = function (refNotification) {
        this.refNotification = refNotification;
    };
    NotificationService.prototype.show = function () {
        this.hidden = false;
    };
    NotificationService.prototype.hide = function () {
        this.hidden = true;
    };
    NotificationService.prototype.setMessage = function (message) {
        this.refNotification.setMessage(message);
    };
    NotificationService.prototype.getMessage = function () {
        return this.message;
    };
    NotificationService.prototype.getState = function () {
        return this.hidden;
    };
    NotificationService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotificationService);
    return NotificationService;
})();
exports.NotificationService = NotificationService;
//# sourceMappingURL=NotificationService.js.map