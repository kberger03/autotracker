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
// addgameModal.ts
// add a game to the database
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var addGameModal_form_1 = require("./addGameModal.form");
var games_service_1 = require("../services/games.service");
var addGameModalComponent = (function () {
    function addGameModalComponent(gamesService, router) {
        this.gamesService = gamesService;
        this.router = router;
        this.game = new addGameModal_form_1.addGameModalForm('', '', '', 0, 0);
    }
    // Actions for form submission
    addGameModalComponent.prototype.onSubmit = function (value) {
        this.gamesService.addGame(value).subscribe(function (data) {
            console.log(data); //for troubleshooting purposes
            $('#addGameModal').modal("hide"); //hides modal
            window.location.reload();
            // this.router.navigateByUrl('menu'); // may need later
        });
    };
    return addGameModalComponent;
}());
addGameModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addGameModal-cmp',
        templateUrl: 'addGameModal.html'
    }),
    __metadata("design:paramtypes", [games_service_1.GamesService, router_1.Router])
], addGameModalComponent);
exports.addGameModalComponent = addGameModalComponent;
