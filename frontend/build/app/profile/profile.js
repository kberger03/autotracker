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
// profile.ts
// profile page for manipulating data 
var core_1 = require("@angular/core");
var vehicles_service_1 = require("../services/vehicles.service");
var router_1 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(vehiclesService, router) {
        this.vehiclesService = vehiclesService;
        this.router = router;
        this.vehicles = [];
        this.vehicle = '';
        this.selectedVehicle = '';
        this.deletedVehicle = '';
    }
    // on load of page
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehiclesService.getVehicles().subscribe(function (data) {
            _this.vehicles = data.objects;
        });
    };
    // opens edit vehicle modal
    ProfileComponent.prototype.openEditVehicleModal = function (vehicle) {
        this.selectedVehicle = vehicle;
        $('#editVehicleModal').modal("show");
    };
    // opens delete vehicle modal
    ProfileComponent.prototype.openDeleteVehicleModal = function (vehicle) {
        this.deletedVehicle = vehicle;
        $('#deleteVehicleModal').modal("show");
    };
    // actions for edit vehicle submission
    ProfileComponent.prototype.onEditSubmit = function (value) {
        this.vehiclesService.updateVehicle(value).subscribe(function (data) {
            $('#editVehicleModal').modal("hide");
            // this.router.navigateByUrl('menu'); //may need later
        });
    };
    //actions for closing edit vehicle modal without saving
    ProfileComponent.prototype.closeEditVehicleModal = function () {
        // this.router.navigateByUrl('/menu'); //may need later
        $('#editVehicleModal').modal("hide");
        window.location.reload();
    };
    //actions for delete vehicle modal 
    ProfileComponent.prototype.deleteVehicle = function (value) {
        this.vehiclesService.deleteVehicle(value).subscribe(function (data) {
            console.log(data);
            $('#deleteVehicleModal').modal("hide");
            window.location.reload();
            // this.router.navigateByUrl('menu');
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'profile-cmp',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [vehicles_service_1.VehiclesService, router_1.Router])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
