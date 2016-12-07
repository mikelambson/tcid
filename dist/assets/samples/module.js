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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var header_1 = require("./header");
var footer_1 = require("./footer");
var root_1 = require("../global/root");
var routes_1 = require("../global/routes");
var module_1 = require("../abouts/module");
var module_2 = require("../activation/module");
var module_3 = require("../config/module");
var module_4 = require("../contribute/module");
var module_5 = require("../contact/module");
var module_6 = require("../dockets/module");
var _404_1 = require("../error/404");
var module_7 = require("../forgot-username/module");
var module_8 = require("../forgot-password/module");
var module_9 = require("../home/module");
var container_1 = require("../modal/container");
var module_10 = require("../judges/module");
var module_11 = require("../profile/module");
var module_12 = require("../registration/module");
var module_13 = require("../resources/module");
var module_14 = require("../users/module");
var module_15 = require("../../components/global/nav/module");
var module_16 = require("../../components/dynamic/module");
var interactive_1 = require("../../services/interface/interactive");
var modal_1 = require("../../services/modal/modal");
var module_17 = require("../../services/google/module");
var module_18 = require("../../services/interface/module");
var GlobalModule = (function () {
    function GlobalModule() {
    }
    return GlobalModule;
}());
GlobalModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, routes_1.ROUTING, module_16.DynamicFormModule, http_1.HttpModule, module_17.GoogleModule, module_15.NavModule, module_18.SocketModule, module_1.AboutsModule, module_2.ActivationModule, module_3.ConfigModule, module_4.ContributeModule, module_5.ContactModule,
            module_6.DocketsModule, module_7.ForgotUsernameModule, module_8.ForgotPasswordModule, module_9.HomeModule, module_10.JudgesModule, module_11.ProfileModule, module_12.RegistrationModule, module_13.ResourcesModule, module_14.UsersModule],
        declarations: [container_1.ModalContainerComponent, root_1.RootComponent, _404_1.Error404Component, header_1.HeaderComponent, footer_1.FooterComponent],
        bootstrap: [root_1.RootComponent],
        providers: [modal_1.Modal, interactive_1.Interactive, routes_1.routingProviders],
    }),
    __metadata("design:paramtypes", [])
], GlobalModule);
exports.GlobalModule = GlobalModule;
