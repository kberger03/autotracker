"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//navbar2.ts
//The navbar for the admin 
var core_1 = require("@angular/core");
var navbar2Component = (function () {
    function navbar2Component() {
    }
    // opens onLogout
    navbar2Component.prototype.onLogout = function () {
        localStorage.clear();
    };
    return navbar2Component;
}());
navbar2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navbar2-cmp',
        templateUrl: 'navbar2.html'
    })
], navbar2Component);
exports.navbar2Component = navbar2Component;
