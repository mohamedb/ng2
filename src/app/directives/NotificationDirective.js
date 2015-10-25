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
var NotificationDirective = (function () {
    function NotificationDirective() {
        this.initMessage = new angular2_1.EventEmitter();
        this.hidden = false;
    }
    /**
     * Le listener permet de capturer l evenement clic sur tout l element
     * a changer par un evenement specifique au moment de l'ajout d'autre clics
     */
    NotificationDirective.prototype.onClick = function (elementClicked) {
        this.initMessage.next('init');
    };
    NotificationDirective.prototype.setNotificationMessage = function (message) {
        this.notificationMessage = message;
    };
    NotificationDirective.prototype.setMessage = function (message) {
        this.notificationMessage = message;
    };
    NotificationDirective.prototype.updateMessage = function (message) {
        this.notificationMessage = message;
        console.log("New message:" + this.notificationMessage);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], NotificationDirective.prototype, "notificationMessage");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], NotificationDirective.prototype, "initMessage");
    Object.defineProperty(NotificationDirective.prototype, "onClick",
        __decorate([
            angular2_1.HostListener('click', ['$event.target']), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object]), 
            __metadata('design:returntype', void 0)
        ], NotificationDirective.prototype, "onClick", Object.getOwnPropertyDescriptor(NotificationDirective.prototype, "onClick")));
    NotificationDirective = __decorate([
        angular2_1.Component({
            selector: 'notification',
            providers: [router_1.RouterLink, router_1.Location]
        }),
        angular2_1.View({
            template: "\n\t <div *ng-if=\"notificationMessage.length!=0\" id=\"notification\">\n        <div id=\"notificationBody\">\n            <div class=\"pull-left\" id=\"notificationText\">\n               {{notificationMessage}}\n            </div>\n            <div class=\"pull-right\" id=\"notificationControl\"> \n              <button  class=\"btn btn-xs\"> X </button>\n            </div>\n        </div>\n    </div> \n\t",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.NgModel, angular2_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationDirective);
    return NotificationDirective;
})();
exports.NotificationDirective = NotificationDirective;
//# sourceMappingURL=NotificationDirective.js.map