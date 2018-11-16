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
// login.ts
// Page for the admin to login
var core_1 = require("@angular/core");
var login_form_1 = require("./login.form");
var users_service_1 = require("../services/users.service");
var auth_service_1 = require("../services/auth.service");
var vehicles_service_1 = require("../services/vehicles.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(usersService, authService, vehiclesService, router) {
        this.usersService = usersService;
        this.authService = authService;
        this.vehiclesService = vehiclesService;
        this.router = router;
        this.vehicles = [];
        this.vehicle = '';
        this.user = new login_form_1.LoginForm('', '');
        this.usersService.getUsers().subscribe(function (users) {
            console.log(users);
        });
    }
    //Actions upon submission
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.authService.authenticate(value).subscribe(function (data) {
            if (data = 'Success') {
                console.log(value.login);
                _this.usersService.getId(value.login).subscribe(function (id) {
                    localStorage.setItem('userId', id.id);
                    localStorage.setItem('userName', id.name);
                    localStorage.setItem('userEmail', id.email);
                    localStorage.setItem('userUsername', id.username);
                    console.log(id);
                    _this.router.navigateByUrl('profile'); //redirect to the profile page in success cases
                });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-cmp',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService,
        vehicles_service_1.VehiclesService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
