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
// addVehicleModal.ts
// add a vehicle to the database
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var addVehicleModal_form_1 = require("./addVehicleModal.form");
var vehicles_service_1 = require("../services/vehicles.service");
var addVehicleModalComponent = (function () {
    function addVehicleModalComponent(vehiclesService, router) {
        this.vehiclesService = vehiclesService;
        this.router = router;
        this.vehicle = new addVehicleModal_form_1.addVehicleModalForm('', '', 0, '', '', '');
    }
    // Actions for form submission
    addVehicleModalComponent.prototype.onSubmit = function (value) {
        console.log(value); //for troubleshooting purposes
        this.vehiclesService.addVehicle(value).subscribe(function (data) {
            console.log(data); //for troubleshooting purposes
            $('#addVehicleModal').modal("hide"); //hides modal
            window.location.reload();
            // this.router.navigateByUrl('menu'); // may need later
        });
    };
    return addVehicleModalComponent;
}());
addVehicleModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addVehicleModal-cmp',
        templateUrl: 'addVehicleModal.html'
    }),
    __metadata("design:paramtypes", [vehicles_service_1.VehiclesService, router_1.Router])
], addVehicleModalComponent);
exports.addVehicleModalComponent = addVehicleModalComponent;
