"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningAlert2Component = void 0;
var core_1 = require("@angular/core");
var WarningAlert2Component = /** @class */ (function () {
    function WarningAlert2Component() {
    }
    WarningAlert2Component.prototype.ngOnInit = function () {
    };
    WarningAlert2Component = __decorate([
        core_1.Component({
            selector: 'app-warning-alert2',
            templateUrl: './warning-alert2.component.html',
            styleUrls: ['./warning-alert2.component.css']
        })
    ], WarningAlert2Component);
    return WarningAlert2Component;
}());
exports.WarningAlert2Component = WarningAlert2Component;
