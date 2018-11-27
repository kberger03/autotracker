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
// pdf.services.ts
//The service to get a pdf file
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PDFService = (function () {
    function PDFService(http) {
        this.http = http;
        this.url = '/api/v1/export'; //so only one change needs to be made if modified
    }
    //Requests a PDF
    PDFService.prototype.getPDF = function (value) {
        console.log("hear me ROAR");
        console.log(value);
        var valueString = JSON.stringify(value);
        console.log(valueString);
        console.log("roar");
        console.log(this.url);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(function (res) { return res.json(); });
    };
    return PDFService;
}());
PDFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PDFService);
exports.PDFService = PDFService;
