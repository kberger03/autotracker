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
var http_1 = require("@angular/http");
var vehicles_service_1 = require("../services/vehicles.service");
var maintAct_form_1 = require("./maintAct.form");
var pdf_service_1 = require("../services/pdf.service");
var MaintActComponent = (function () {
    function MaintActComponent(activesService, vehiclesService, pdfService, router, http) {
        this.activesService = activesService;
        this.vehiclesService = vehiclesService;
        this.pdfService = pdfService;
        this.router = router;
        this.http = http;
        this.actives = [];
        this.active = '';
        this.backUpActives = [];
        this.selectedActive = '';
        this.deletedActive = '';
        this.sortFlag = 0;
        this.filterObj = new maintAct_form_1.maintActForm('', '', '');
    }
    // on load of page
    MaintActComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("I am in maintpage. userId is ");
        console.log(localStorage.getItem("userId"));
        this.activesService.getUserActives(localStorage.getItem("userId")).subscribe(function (data) {
            console.log("wordy words");
            console.log(data);
            data.objects.forEach(function (el) {
                console.log(el.vehicleId);
                _this.vehiclesService.getVehicle(el.vehicleId).subscribe(function (veh) {
                    console.log(veh);
                    console.log(veh.nickname);
                    el.nickname = veh.nickname;
                });
            });
            console.log("after thought");
            console.log(data);
            _this.actives = data.objects;
            _this.backUpActives = _this.actives;
            console.log(_this.backUpActives);
        });
    };
    //page to PDF 
    MaintActComponent.prototype.pagePDF = function () {
        var _this = this;
        console.log("I am pdf");
        this.pdfService.getPDF(this.actives).subscribe(function (data) {
            _this.getFile("http://localhost:3000/api/v1/download")
                .subscribe(function (fileData) {
                var b = new Blob([fileData], { type: 'text/csv' });
                var url = window.URL.createObjectURL(b);
                var a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                a.href = url;
                a.download = 'history.csv'; // gives it a name via an a tag
                a.click();
                window.URL.revokeObjectURL(url);
                //window.open(url);
            });
        });
    };
    MaintActComponent.prototype.getFile = function (path) {
        var options = new http_1.RequestOptions({ responseType: http_1.ResponseContentType.Blob });
        return this.http.get(path, options)
            .map(function (response) { return response.blob(); });
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
    // opens filter modal
    MaintActComponent.prototype.filterModal = function (active) {
        $('#filterModal').modal("show");
    };
    // actions for filter submission
    MaintActComponent.prototype.onFilterSubmit = function () {
        // console.log('inside filter submit');
        // console.log(this.actives);
        // this.actives = this.backUpActives;
        // console.log(this.actives);
        $('#filterModal').modal("hide");
    };
    //actions for clearing filter modal 
    MaintActComponent.prototype.clearFilterModal = function () {
        // this.router.navigateByUrl('/menu'); //may need later
        // $('#filterModal').modal("hide");
        this.actives = this.backUpActives;
        // window.location.reload();
    };
    MaintActComponent.prototype.sortBy = function (col) {
        if (this.sortFlag === 0) {
            console.log(this.actives);
            this.actives = this.actives.sort(function (a, b) {
                if (a[col] > b[col]) {
                    return 1;
                }
                else if (a[col] < b[col]) {
                    return -1;
                }
                return 0;
            });
            console.log(this.actives);
            this.sortFlag = 1;
        }
        else {
            console.log(this.actives);
            this.actives = this.actives.sort(function (a, b) {
                if (a[col] < b[col]) {
                    return 1;
                }
                else if (a[col] > b[col]) {
                    return -1;
                }
                return 0;
            });
            console.log(this.actives);
            this.sortFlag = 0;
        }
    };
    MaintActComponent.prototype.filterBy = function (value) {
        console.log('inside filter submit');
        console.log(this.actives);
        this.clearFilterModal();
        console.log(this.actives);
        console.log('enter filter');
        console.log(value.mtype);
        console.log(value.mechanic);
        console.log(this.backUpActives);
        if (value.nickname.length !== 0) {
            this.actives = this.actives.filter(function (a) {
                return a['nickname'].toLowerCase().startsWith(value.nickname.toLowerCase());
            });
        }
        if (value.mtype.length !== 0) {
            this.actives = this.actives.filter(function (a) {
                return a['mtype'].toLowerCase().startsWith(value.mtype.toLowerCase());
            });
        }
        if (value.mechanic.length !== 0) {
            this.actives = this.actives.filter(function (a) {
                return a['mechanic'].toLowerCase().startsWith(value.mechanic.toLowerCase());
            });
        }
    };
    return MaintActComponent;
}());
MaintActComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'maintAct-cmp',
        templateUrl: 'maintAct.html'
    }),
    __metadata("design:paramtypes", [actives_service_1.ActivesService, vehicles_service_1.VehiclesService, pdf_service_1.PDFService, router_1.Router, http_1.Http])
], MaintActComponent);
exports.MaintActComponent = MaintActComponent;
