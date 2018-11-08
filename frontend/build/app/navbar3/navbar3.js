"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//navbar3.ts
//The navbar for the login page 
var core_1 = require("@angular/core");
var navbar3Component = (function () {
    function navbar3Component() {
    }
    return navbar3Component;
}());
navbar3Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navbar3-cmp',
        templateUrl: 'navbar3.html'
    })
], navbar3Component);
exports.navbar3Component = navbar3Component;
