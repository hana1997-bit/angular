"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningAlertComponent = void 0;
var core_1 = require("@angular/core");
var WarningAlertComponent = /** @class */ (function () {
    function WarningAlertComponent() {
        this.message = 'attention tu es en alert !!!';
        this.serverId = 3;
        this.allowShow = false;
        this.serverName = 'hana server';
    }
    WarningAlertComponent.prototype.ngOnInit = function () {
    };
    WarningAlertComponent.prototype.typeDalert = function () {
        return 'le serveur est en panne';
    };
    WarningAlertComponent.prototype.sameFunction = function () {
        this.allowShow = !this.allowShow;
    };
    WarningAlertComponent = __decorate([
        core_1.Component({
            selector: 'app-warning-alert',
            templateUrl: './warning-alert.component.html',
            styleUrls: ['./warning-alert.component.css']
        })
    ], WarningAlertComponent);
    return WarningAlertComponent;
}());
exports.WarningAlertComponent = WarningAlertComponent;
