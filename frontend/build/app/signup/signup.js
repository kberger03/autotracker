"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// signup.ts
//The add user page 
var core_1 = require("@angular/core");
var signup_form_1 = require("./signup.form");
var users_service_1 = require("../services/users.service");
var SignupComponent = (function () {
    function SignupComponent(usersService) {
        this.usersService = usersService;
        this.user = new signup_form_1.SignupForm('', '', '', '');
        this.usersService.getUsers().subscribe(function (users) {
            console.log(users);
        });
    }
    // actions upon submission of the form 
    SignupComponent.prototype.onSubmit = function (value) {
        console.log(value);
        this.usersService.addUser(value).subscribe(function (data) {
            console.log(data);
            $('#signup').modal("hide");
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signup-cmp',
        templateUrl: 'signup.html'
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], SignupComponent);
exports.SignupComponent = SignupComponent;
