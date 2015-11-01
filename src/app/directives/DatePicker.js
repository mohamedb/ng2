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
// <reference path="../../../typings/tsd.d.ts"/>
/// <reference path="../../../typings/bootstrap.v3.datetimepicker/bootstrap.v3.datetimepicker.d.ts"/>
var angular2_1 = require('angular2/angular2');
var UtilisateurService_1 = require('../services/UtilisateurService');
var DatePicker = (function () {
    function DatePicker() {
        this.updateDate = new angular2_1.EventEmitter();
        console.log("datepicker directive est chargée !");
        jQuery('#datetimepicker1').datetimepicker({
            locale: 'fr',
            daysOfWeekDisabled: [0, 6]
        });
    }
    DatePicker.prototype.update = function ($event, d) {
        console.log("directive @dateInitiale: " + d.value);
        this.updateDate.next({ d: d.value });
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], DatePicker.prototype, "dateInitiale");
    __decorate([
        //le binding s'arrete ici! car Moment.js lib utulise Clone
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], DatePicker.prototype, "updateDate");
    DatePicker = __decorate([
        angular2_1.Component({
            selector: 'input-datetime',
            providers: [UtilisateurService_1.UtilisateurService]
        }),
        angular2_1.View({
            template: "\n\t<p>\t\n\t DatePickerDirective:\n\t   <input type='text'\n\t\t\t\t\t  id='datetimepicker1'\n\t\t\t\t\t  #d\n\t\t\t\t\t  [value]=\"dateInitiale\"\n\t\t\t\t\t  (keyup)=\"update($event,d)\"\n\t\t\t\t\t  \n\t\t\t\t\t />\n\t</p>\n\t",
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DatePicker);
    return DatePicker;
})();
exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.js.map