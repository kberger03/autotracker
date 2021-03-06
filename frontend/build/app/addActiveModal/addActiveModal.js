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
// addActiveModal.ts
// add a active to the database
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var addActiveModal_form_1 = require("./addActiveModal.form");
var actives_service_1 = require("../services/actives.service");
var addActiveModalComponent = (function () {
    function addActiveModalComponent(activesService, router) {
        this.activesService = activesService;
        this.router = router;
        this.active = new addActiveModal_form_1.addActiveModalForm('', '', '');
    }
    // Actions for form submission
    addActiveModalComponent.prototype.onSubmit = function (value) {
        console.log(value); //for troubleshooting purposes
        this.activesService.addActive(value).subscribe(function (data) {
            console.log(data); //for troubleshooting purposes
            $('#addActiveModal').modal("hide"); //hides modal
            window.location.reload();
            // this.router.navigateByUrl('menu'); // may need later
        });
    };
    return addActiveModalComponent;
}());
addActiveModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addActiveModal-cmp',
        templateUrl: 'addActiveModal.html'
    }),
    __metadata("design:paramtypes", [actives_service_1.ActivesService, router_1.Router])
], addActiveModalComponent);
exports.addActiveModalComponent = addActiveModalComponent;
