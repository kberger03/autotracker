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
var core_1 = require("@angular/core");
var games_service_1 = require("../services/games.service");
var editGameModalComponent = (function () {
    function editGameModalComponent(gamesService) {
        this.gamesService = gamesService;
        this.submitted = false;
    }
    editGameModalComponent.prototype.onSubmit = function (value) {
        this.submitted = true;
        this.gamesService.updateGame(value).subscribe(function (data) {
            $('#editGameModal').modal("hide");
            //window.location.reload();
            // this.router.navigateByUrl('menu');
        });
    };
    editGameModalComponent.prototype.closeEditGameModal = function () {
        $('#editGameModal').modal("hide");
        // window.location.reload();
    };
    return editGameModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], editGameModalComponent.prototype, "game", void 0);
editGameModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'editGameModal-cmp',
        templateUrl: 'editGameModal.html'
    }),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], editGameModalComponent);
exports.editGameModalComponent = editGameModalComponent;
