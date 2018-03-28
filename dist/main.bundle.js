webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libraries_libraries_component__ = __webpack_require__("./src/app/libraries/libraries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookmarks_bookmarks_component__ = __webpack_require__("./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__metric_details_metric_details_component__ = __webpack_require__("./src/app/metric-details/metric-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metric_view_metric_view_component__ = __webpack_require__("./src/app/metric-view/metric-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'libraries', component: __WEBPACK_IMPORTED_MODULE_2__libraries_libraries_component__["a" /* LibrariesComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'library/:id', component: __WEBPACK_IMPORTED_MODULE_5__metric_details_metric_details_component__["a" /* MetricDetailsComponent */] },
    { path: 'domain/:id', component: __WEBPACK_IMPORTED_MODULE_5__metric_details_metric_details_component__["a" /* MetricDetailsComponent */] },
    { path: 'image/:id', component: __WEBPACK_IMPORTED_MODULE_6__metric_view_metric_view_component__["a" /* MetricViewComponent */] },
    { path: 'bookmarks', component: __WEBPACK_IMPORTED_MODULE_4__bookmarks_bookmarks_component__["a" /* BookmarksComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "nav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\nh3{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-dark bg-primary\"> -->\n<!-- <ngbd-tabset-basic></ngbd-tabset-basic> -->\n\n\n <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class =\"navbar\">\n    <a routerLink=\"/dashboard\">Catergorize By Domain</a>\n    <a routerLink=\"/libraries\">Catergorize By Invdividual Libraries</a>\n    <a routerLink=\"/bookmarks\">Bookmarks</a>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n<!-- <app-libraries></app-libraries> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project 3';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metric_details_shared_image_service__ = __webpack_require__("./src/app/metric-details/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libraries_libraries_component__ = __webpack_require__("./src/app/libraries/libraries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bookmarks_bookmarks_component__ = __webpack_require__("./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__metric_details_metric_details_component__ = __webpack_require__("./src/app/metric-details/metric-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__domain_service__ = __webpack_require__("./src/app/domain.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__library_service__ = __webpack_require__("./src/app/library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graph_service__ = __webpack_require__("./src/app/graph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__metric_view_metric_view_component__ = __webpack_require__("./src/app/metric-view/metric-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__libraries_libraries_component__["a" /* LibrariesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__filter_pipe__["a" /* libraryFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__bookmarks_bookmarks_component__["a" /* BookmarksComponent */],
                __WEBPACK_IMPORTED_MODULE_11__metric_details_metric_details_component__["a" /* MetricDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__metric_view_metric_view_component__["a" /* MetricViewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__filter_pipe__["a" /* libraryFilterPipe */], __WEBPACK_IMPORTED_MODULE_6__metric_details_shared_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_12__domain_service__["a" /* DomainService */], __WEBPACK_IMPORTED_MODULE_13__library_service__["a" /* LibraryService */], __WEBPACK_IMPORTED_MODULE_14__graph_service__["a" /* GraphService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Bookmarked metrics</h2>\n"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookmarksComponent = /** @class */ (function () {
    function BookmarksComponent() {
    }
    BookmarksComponent.prototype.ngOnInit = function () {
    };
    BookmarksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bookmarks',
            template: __webpack_require__("./src/app/bookmarks/bookmarks.component.html"),
            styles: [__webpack_require__("./src/app/bookmarks/bookmarks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookmarksComponent);
    return BookmarksComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n   padding: 0;\r\n   width: 1200px;\r\n   margin: 20px auto;\r\n }\r\n\r\nli{\r\n   display: inline;\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n}\r\n\r\n.btn-info{\r\n  margin: 6px;\r\n}\r\n\r\n.button-row{\r\n  margin: auto;;\r\n}\r\n\r\n.btn-outline-light {\r\n    padding: 6px;\r\n    border: 4px solid #eee;\r\n    -webkit-box-shadow: #555 1px 1px 8px 1px;\r\n            box-shadow: #555 1px 1px 8px 1px;\r\n    height: 160px;\r\n    width: 200px;\r\n    color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Visualized Metrics By Domain </h2>\r\n<div class = \"button-row\">\r\n  <ul id = \"thumbnailslist\">\r\n    <li *ngFor=\"let dom of domain\" (click)=\"onSelect(dom)\">\r\n      <a routerLink=\"/domain/{{dom.id}}\">\r\n        <button type=\"button\" class=\"btn-outline-light\">{{dom.catergory}}</button>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_names__ = __webpack_require__("./src/app/domain-names.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.domain = __WEBPACK_IMPORTED_MODULE_1__domain_names__["a" /* DOMAIN */];
    }
    DashboardComponent.prototype.onSelect = function (dom) {
        this.selectedDomain = dom;
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/domain-names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAIN; });
var DOMAIN = [
    { id: 1, catergory: "testing" },
    { id: 2, catergory: "utilities" },
    { id: 3, catergory: "mocking" },
    { id: 4, catergory: "cryptograpghy" },
    { id: 5, catergory: "json" },
    { id: 6, catergory: "database" },
    { id: 7, catergory: "security" },
    { id: 8, catergory: "object-relational mapping" },
    { id: 9, catergory: "xml" }
];


/***/ }),

/***/ "./src/app/domain.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_names__ = __webpack_require__("./src/app/domain-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DomainService = /** @class */ (function () {
    function DomainService() {
    }
    DomainService.prototype.getDomain = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__domain_names__["a" /* DOMAIN */].find(function (domain) { return domain.id === id; }));
    };
    DomainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DomainService);
    return DomainService;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return libraryFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var libraryFilterPipe = /** @class */ (function () {
    function libraryFilterPipe() {
    }
    libraryFilterPipe.prototype.transform = function (items, criteria) {
        if (criteria == 'all') {
            return items;
        }
        else
            return items.filter(function (item) {
                return item.catergory === criteria;
            });
    };
    libraryFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'libraryFilter' })
    ], libraryFilterPipe);
    return libraryFilterPipe;
}());



/***/ }),

/***/ "./src/app/graph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphService = /** @class */ (function () {
    // visibleImages = [];
    // getImages(){
    //   return this.visibleImages = IMAGES.slice(0);
    // }
    function GraphService() {
    }
    // getImage(id: number){
    //   return IMAGES.slice(0).find(image => image.id == id)
    // }
    GraphService.prototype.getGraph = function (id) {
        return GRAPHS.slice(0).find(function (graph) { return graph.id == id; });
    };
    GraphService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GraphService);
    return GraphService;
}());

var GRAPHS = [
    { id: 1, catergory: "Popularity", url: "assets/img/pgraph.jpg" },
    { id: 2, catergory: "releasefrequency", url: "assets/img/rqgraph.jpg" },
    { id: 3, catergory: "lmd", url: "assets/img/lmd.jpg" },
    { id: 5, catergory: "last discuss overflow", url: "assets/img/ldof.png" },
    { id: 6, catergory: "performance", url: "assets/img/performance.jpg" },
    { id: 7, catergory: "security", url: "assets/img/security.jpg" }
];


/***/ }),

/***/ "./src/app/libraries/libraries.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n   padding: 0;\r\n   width: 1200px;\r\n   margin: 20px auto;\r\n }\r\n\r\nli{\r\n   display: inline;\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n}\r\n\r\n.btn-info{\r\n  margin: 6px;\r\n}\r\n\r\n.button-row{\r\n  margin: auto;\r\n}\r\n\r\n.btn-outline-light {\r\n    padding: 6px;\r\n    border: 4px solid #eee;\r\n    -webkit-box-shadow: #555 1px 1px 8px 1px;\r\n            box-shadow: #555 1px 1px 8px 1px;\r\n    height: 160px;\r\n    width: 200px;\r\n    color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/libraries/libraries.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Individual libraries</h2>\r\n<div class = \"row\">\r\n  <div class = \"button-row\">\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'all'\" (click) =\"filterby ='all'\">All</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'testing'\" (click) = \"filterby = 'testing'\">Testing</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'logging'\" (click) = \"filterby = 'logging'\">Logging</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'utilities'\" (click) = \"filterby = 'utilities'\">Utilities</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'mocking'\" (click) = \"filterby = 'mocking'\">Mocking</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'cryptograpghy'\" (click) = \"filterby = 'cryptograpghy'\">Cryptograpghy</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'json'\" (click) = \"filterby = 'json'\">JSON</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'database'\" (click) = \"filterby = 'database'\">Database</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'Security'\" (click) = \"filterby = 'Security'\">Security</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'oom'\" (click) = \"filterby = 'oom'\">Object-oriented mapping</button>\r\n    <button class = \"btn btn-lg btn-info\" [class.active]=\"filterby== 'xml'\" (click) = \"filterby = 'xml'\">XML</button>\r\n  </div>\r\n\r\n  <ul id = \"thumbnailslist\">\r\n    <li *ngFor=\"let library of (libraries | libraryFilter:filterby)\" (click)=\"onSelect(library)\">\r\n      <a routerLink=\"/library/{{library.id}}\">\r\n        <button type=\"button\" class=\"btn-outline-light\">{{library.name}}</button>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/libraries/libraries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibrariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_names__ = __webpack_require__("./src/app/library-names.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibrariesComponent = /** @class */ (function () {
    function LibrariesComponent() {
        this.filterby = 'all';
        this.libraries = __WEBPACK_IMPORTED_MODULE_1__library_names__["a" /* LIBRARIES */];
    }
    LibrariesComponent.prototype.onSelect = function (library) {
        this.selectedLibrary = library;
    };
    LibrariesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LibrariesComponent.prototype, "filterby", void 0);
    LibrariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-libraries',
            template: __webpack_require__("./src/app/libraries/libraries.component.html"),
            styles: [__webpack_require__("./src/app/libraries/libraries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LibrariesComponent);
    return LibrariesComponent;
}());



/***/ }),

/***/ "./src/app/library-names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIBRARIES; });
var LIBRARIES = [
    { id: 1, name: "junit4", catergory: "testing" },
    { id: 2, name: "testing", catergory: "testing" },
    { id: 3, name: "slf4j", catergory: "logging" },
    { id: 4, name: "log4j2", catergory: "logging" },
    { id: 5, name: "logback", catergory: "logging" },
    { id: 6, name: "common logging", catergory: "logging" },
    { id: 7, name: "tingylog", catergory: "logging" },
    { id: 8, name: "blitz4j", catergory: "logging" },
    { id: 9, name: "minlog", catergory: "logging" },
    { id: 10, name: "guava", catergory: "utilities" },
    { id: 11, name: "commons lang", catergory: "utilities" },
    { id: 12, name: "mockito", catergory: "mocking" },
    { id: 13, name: "easymock", catergory: "mocking" },
    { id: 14, name: "powermock", catergory: "mocking" },
    { id: 15, name: "jmock", catergory: "cryptograpghy" },
];


/***/ }),

/***/ "./src/app/library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_names__ = __webpack_require__("./src/app/library-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibraryService = /** @class */ (function () {
    function LibraryService() {
    }
    LibraryService.prototype.getLibrary = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__library_names__["a" /* LIBRARIES */].find(function (library) { return library.id === id; }));
    };
    LibraryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "./src/app/metric-details/metric-details.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n   padding: 0;\r\n   width: 1200px;\r\n   margin: 20px auto;\r\n }\r\n\r\nli{\r\n   display: inline;\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n}\r\n\r\n.btn-info{\r\n  margin: 6px;\r\n}\r\n\r\n.button-row{\r\n  margin: auto;;\r\n}\r\n\r\n.tn {\r\n    padding: 6px;\r\n    border: 4px solid #eee;\r\n    -webkit-box-shadow: #555 1px 1px 8px 1px;\r\n            box-shadow: #555 1px 1px 8px 1px;\r\n    height: 190px;\r\n    width: 240px;\r\n    /* color: black; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/metric-details/metric-details.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Visualized Software Metrics</h2>\n\n\n<!-- <div *ngIf=\"domain\">\n  <h2>{{ domain.catergory | uppercase }}</h2>\n<div> -->\n\n<div *ngIf=\"library\">\n  <h2>{{ library.name | uppercase }}</h2>\n<div>\n\n<div class = \"row\">\n  <ul id = \"thumbnailslist\">\n    <li *ngFor=\"let image  of visibleImages \">\n      <a [routerLink] = \"['/image', image.id]\">\n        <img src = \"{{image.url}}\" class = \"tn\">\n      </a>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/metric-details/metric-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_image_service__ = __webpack_require__("./src/app/metric-details/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_service__ = __webpack_require__("./src/app/domain.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_service__ = __webpack_require__("./src/app/library.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MetricDetailsComponent = /** @class */ (function () {
    function MetricDetailsComponent(imageService, domainService, libraryService, location, route) {
        this.imageService = imageService;
        this.domainService = domainService;
        this.libraryService = libraryService;
        this.location = location;
        this.route = route;
        this.visibleImages = [];
        this.visibleImages = this.imageService.getImages();
    }
    MetricDetailsComponent.prototype.ngOnInit = function () {
        this.getDomain();
        this.getLibrary();
    };
    MetricDetailsComponent.prototype.getDomain = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.domainService.getDomain(id)
            .subscribe(function (domain) { return _this.domain = domain; });
    };
    MetricDetailsComponent.prototype.getLibrary = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.libraryService.getLibrary(id)
            .subscribe(function (library) { return _this.library = library; });
    };
    MetricDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-metric-details',
            template: __webpack_require__("./src/app/metric-details/metric-details.component.html"),
            styles: [__webpack_require__("./src/app/metric-details/metric-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_4__domain_service__["a" /* DomainService */], __WEBPACK_IMPORTED_MODULE_5__library_service__["a" /* LibraryService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MetricDetailsComponent);
    return MetricDetailsComponent;
}());



/***/ }),

/***/ "./src/app/metric-details/shared/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageService = /** @class */ (function () {
    function ImageService() {
        this.visibleImages = [];
    }
    ImageService.prototype.getImages = function () {
        return this.visibleImages = IMAGES.slice(0);
    };
    ImageService.prototype.getImage = function (id) {
        return IMAGES.slice(0).find(function (image) { return image.id == id; });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());

var IMAGES = [
    { id: 1, catergory: "Popularity", url: "assets/img/popularity.png" },
    { id: 2, catergory: "Release Frequency", url: "assets/img/releasefrequency.png" },
    { id: 3, catergory: "Last modifying date", url: "assets/img/lmd.png" },
    { id: 4, catergory: "Backwards compatability", url: "assets/img/BackwardsCompatibility.png" },
    { id: 5, catergory: "Last discused on stack overflow", url: "assets/img/LDOSO.png" },
    { id: 6, catergory: "Performance", url: "assets/img/performance.png" },
    { id: 7, catergory: "Security", url: "assets/img/security.png" },
    { id: 8, catergory: "Issue responding", url: "assets/img/irt.png" },
    { id: 9, catergory: "Issue closing", url: "assets/img/ict.png" }
];


/***/ }),

/***/ "./src/app/metric-view/metric-view.component.css":
/***/ (function(module, exports) {

module.exports = ".img-container{\r\n  margin: 24px;\r\n  -webkit-box-shadow:#555 1px 2px 8px 1px;\r\n          box-shadow:#555 1px 2px 8px 1px;\r\n  min-height: 660px;\r\n  width: 900px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n\r\n\r\n\r\n.tabs{\r\n  margin: auto -230px;\r\n  min-height: 660px;\r\n  width: 2000px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/metric-view/metric-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"image\">\n  <h2>{{ image.catergory | uppercase }}</h2>\n<div>\n\n\n<div class = \"row\">\n  <div [ngStyle] = \"{'background-image': 'url('+ graph.url +')'}\" class =\"img-container\">\n</div>\n\n\n\n\n<div class = \"row\">\n  <div style=\"background-image : url('../assets/img/tabs.png')\" class =\"tabs\">\n</div>\n"

/***/ }),

/***/ "./src/app/metric-view/metric-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metric_details_shared_image_service__ = __webpack_require__("./src/app/metric-details/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_service__ = __webpack_require__("./src/app/library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graph_service__ = __webpack_require__("./src/app/graph.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MetricViewComponent = /** @class */ (function () {
    function MetricViewComponent(imageService, libraryService, graphService, location, route) {
        this.imageService = imageService;
        this.libraryService = libraryService;
        this.graphService = graphService;
        this.location = location;
        this.route = route;
    }
    MetricViewComponent.prototype.ngOnInit = function () {
        this.image = this.imageService.getImage(+this.route.snapshot.params['id']);
        this.graph = this.graphService.getGraph(+this.route.snapshot.params['id']);
    };
    MetricViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-metric-view',
            template: __webpack_require__("./src/app/metric-view/metric-view.component.html"),
            styles: [__webpack_require__("./src/app/metric-view/metric-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__metric_details_shared_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_4__library_service__["a" /* LibraryService */], __WEBPACK_IMPORTED_MODULE_5__graph_service__["a" /* GraphService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MetricViewComponent);
    return MetricViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map