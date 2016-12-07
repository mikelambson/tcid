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
var core_1 = require("angular/core");
var router_1 = require("angular/router");
var home_component_1 = require("./home.component");
var login_component_1 = require("./login.component");
var schedule_component_1 = require("./schedule.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"app\">\n      Hello world! \n      <p>Root Component Here</p>\n      <nav>\n        <ul>\n          <li>\n            <a [routerLink]=\" ['Home'] \">Home</a>\n          </li>\n          <li>\n            <a [routerLink]=\" ['Login'] \">Login</a>\n          </li>\n          <li>\n            <a [routerLink=\" ['Schedule'] \">Schedule</a>\n        </ul>\n      </nav>\n      <main>\n        <router-outlet></router-outlet>\n      </main>\n    </div>\n  "
    }),
    router_1.RouteConfig([
        { path: '/', name: 'Home', component: home_component_1.Home, useAsDefault: true },
        { path: '/login', name: 'Login', component: login_component_1.Login },
        { path: '/schedule', name: 'Schedule', component: schedule_component_1.Schedule },
    ]),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
