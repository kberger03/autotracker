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
// maintAct.ts
// maintAct page for manipulating data 
var core_1 = require("@angular/core");
var actives_service_1 = require("../services/actives.service");
var router_1 = require("@angular/router");
var MaintActComponent = (function () {
    function MaintActComponent(activesService, router) {
        this.activesService = activesService;
        this.router = router;
        this.actives = [];
        this.active = '';
        this.selectedActive = '';
        this.deletedActive = '';
    }
    // on load of page
    MaintActComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activesService.getActives().subscribe(function (data) {
            _this.actives = data.objects;
        });
    };
    // opens edit actives modal
    MaintActComponent.prototype.openEditActiveModal = function (active) {
        this.selectedActive = active;
        $('#editActiveModal').modal("show");
    };
    // opens delete active modal
    MaintActComponent.prototype.openDeleteActiveModal = function (active) {
        this.deletedActive = active;
        $('#deleteActiveModal').modal("show");
    };
    // actions for edit active submission
    MaintActComponent.prototype.onEditSubmit = function (value) {
        this.activesService.updateActive(value).subscribe(function (data) {
            $('#editActiveModal').modal("hide");
            // this.router.navigateByUrl('menu'); //may need later
        });
    };
    //actions for closing edit active modal without saving
    MaintActComponent.prototype.closeEditActiveModal = function () {
        // this.router.navigateByUrl('/menu'); //may need later
        $('#editActiveModal').modal("hide");
        window.location.reload();
    };
    //actions for delete active modal 
    MaintActComponent.prototype.deleteActive = function (value) {
        this.activesService.deleteActive(value).subscribe(function (data) {
            console.log(data);
            $('#deleteActiveModal').modal("hide");
            window.location.reload();
            // this.router.navigateByUrl('menu');
        });
    };
    return MaintActComponent;
}());
MaintActComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'maintAct-cmp',
        templateUrl: 'maintAct.html'
    }),
    __metadata("design:paramtypes", [actives_service_1.ActivesService, router_1.Router])
], MaintActComponent);
exports.MaintActComponent = MaintActComponent;
