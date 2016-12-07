"use strict";
var router_1 = require("@angular/router");
var _404_1 = require("../error/404");
exports.routingProviders = [];
var GlobalRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _404_1.Error404Component }
];
exports.ROUTING = router_1.RouterModule.forRoot(GlobalRoutes);
