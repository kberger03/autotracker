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
// menu.ts
// menu page for manipulating data 
var core_1 = require("@angular/core");
var games_service_1 = require("../services/games.service");
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(gamesService, router) {
        this.gamesService = gamesService;
        this.router = router;
        this.games = [];
        this.game = '';
        this.selectedGame = '';
        this.deletedGame = '';
    }
    // on load of page
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gamesService.getGames().subscribe(function (data) {
            _this.games = data.objects;
        });
    };
    // opens edit game modal
    MenuComponent.prototype.openEditGameModal = function (game) {
        this.selectedGame = game;
        $('#editGameModal').modal("show");
    };
    // opens delete gmae modal
    MenuComponent.prototype.openDeleteGameModal = function (game) {
        this.deletedGame = game;
        $('#deleteGameModal').modal("show");
    };
    // actions for edit game submission
    MenuComponent.prototype.onEditSubmit = function (value) {
        this.gamesService.updateGame(value).subscribe(function (data) {
            $('#editGameModal').modal("hide");
            // this.router.navigateByUrl('menu'); //may need later
        });
    };
    //actions for closing edit game modal without saving
    MenuComponent.prototype.closeEditGameModal = function () {
        // this.router.navigateByUrl('/menu'); //may need later
        $('#editGameModal').modal("hide");
        window.location.reload();
    };
    //actions for delete game modal 
    MenuComponent.prototype.deleteGame = function (value) {
        this.gamesService.deleteGame(value).subscribe(function (data) {
            console.log(data);
            $('#deleteGameModal').modal("hide");
            window.location.reload();
            // this.router.navigateByUrl('menu');
        });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'menu-cmp',
        templateUrl: 'menu.html'
    }),
    __metadata("design:paramtypes", [games_service_1.GamesService, router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
