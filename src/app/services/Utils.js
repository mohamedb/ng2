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
var FrDatetime = (function () {
    function FrDatetime() {
        this.dateD = new Date();
    }
    FrDatetime.prototype.setDate = function (dateD) {
        this.dateD = dateD;
        return this;
    };
    FrDatetime.prototype.toString = function () {
        var yyyy = this.dateD.getFullYear().toString();
        var mm = (this.dateD.getMonth() + 1).toString(); // getMonth() is zero-based
        var dd = this.dateD.getDate().toString();
        var minute = this.dateD.getMinutes();
        var hour = this.dateD.getHours();
        return " " + hour + ":" + minute + " " + (dd[1] ? dd : "0" + dd[0]) + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + yyyy; // padding
    };
    FrDatetime = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FrDatetime);
    return FrDatetime;
})();
exports.FrDatetime = FrDatetime;
//# sourceMappingURL=Utils.js.map