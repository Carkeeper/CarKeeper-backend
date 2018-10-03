(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Arrays/Category.ts":
/*!************************************!*\
  !*** ./src/app/Arrays/Category.ts ***!
  \************************************/
/*! exports provided: category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
var category = [
    'Supermini',
    'Small family',
    'Large family',
    'Compact',
    'Executive',
    'Luxury',
    'Van',
    'Pick-up',
    '4x4'
];


/***/ }),

/***/ "./src/app/Arrays/Colors.ts":
/*!**********************************!*\
  !*** ./src/app/Arrays/Colors.ts ***!
  \**********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colors = [
    'White',
    'Silver',
    'Black',
    'Grey',
    'Blue',
    'Red',
    'Brown',
    'Green',
    'Yellow',
];


/***/ }),

/***/ "./src/app/Arrays/Genders.ts":
/*!***********************************!*\
  !*** ./src/app/Arrays/Genders.ts ***!
  \***********************************/
/*! exports provided: genders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genders", function() { return genders; });
var genders = [
    "Male",
    "Female"
];


/***/ }),

/***/ "./src/app/Classes/Car.ts":
/*!********************************!*\
  !*** ./src/app/Classes/Car.ts ***!
  \********************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());



/***/ }),

/***/ "./src/app/Classes/CarAction.ts":
/*!**************************************!*\
  !*** ./src/app/Classes/CarAction.ts ***!
  \**************************************/
/*! exports provided: CarAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarAction", function() { return CarAction; });
var CarAction = /** @class */ (function () {
    function CarAction() {
    }
    return CarAction;
}());



/***/ }),

/***/ "./src/app/Classes/MfgRecommendation.ts":
/*!**********************************************!*\
  !*** ./src/app/Classes/MfgRecommendation.ts ***!
  \**********************************************/
/*! exports provided: MfgRecommendation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfgRecommendation", function() { return MfgRecommendation; });
var MfgRecommendation = /** @class */ (function () {
    function MfgRecommendation() {
    }
    return MfgRecommendation;
}());



/***/ }),

/***/ "./src/app/Classes/User.ts":
/*!*********************************!*\
  !*** ./src/app/Classes/User.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Directives/cardHostDirective/card-host.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Directives/cardHostDirective/card-host.directive.ts ***!
  \*********************************************************************/
/*! exports provided: CardHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHostDirective", function() { return CardHostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardHostDirective = /** @class */ (function () {
    function CardHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    CardHostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCardHost]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], CardHostDirective);
    return CardHostDirective;
}());



/***/ }),

/***/ "./src/app/Directives/formHostDirective/form-host.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Directives/formHostDirective/form-host.directive.ts ***!
  \*********************************************************************/
/*! exports provided: FormHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHostDirective", function() { return FormHostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormHostDirective = /** @class */ (function () {
    function FormHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FormHostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFormHost]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], FormHostDirective);
    return FormHostDirective;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_Add_Items_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Add-Items/add-car/add-car.component */ "./src/app/components/Add-Items/add-car/add-car.component.ts");
/* harmony import */ var _components_Add_Items_add_car_action_add_car_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Add-Items/add-car-action/add-car-action.component */ "./src/app/components/Add-Items/add-car-action/add-car-action.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found-component/page-not-found-component.component */ "./src/app/components/page-not-found-component/page-not-found-component.component.ts");
/* harmony import */ var _components_Item_details_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Item-details/car-details/car-details.component */ "./src/app/components/Item-details/car-details/car-details.component.ts");
/* harmony import */ var _components_forms_general_form_general_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/forms/general-form/general-form.component */ "./src/app/components/forms/general-form/general-form.component.ts");
/* harmony import */ var _components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/forms/user-form/user-form.component */ "./src/app/components/forms/user-form/user-form.component.ts");
/* harmony import */ var _Directives_formHostDirective_form_host_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Directives/formHostDirective/form-host.directive */ "./src/app/Directives/formHostDirective/form-host.directive.ts");
/* harmony import */ var _components_forms_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forms/car-form/car-form.component */ "./src/app/components/forms/car-form/car-form.component.ts");
/* harmony import */ var _components_dashboards_general_dashboard_general_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboards/general-dashboard/general-dashboard.component */ "./src/app/components/dashboards/general-dashboard/general-dashboard.component.ts");
/* harmony import */ var _Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Directives/cardHostDirective/card-host.directive */ "./src/app/Directives/cardHostDirective/card-host.directive.ts");
/* harmony import */ var _components_cards_mini_car_card_mini_car_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cards/mini-car-card/mini-car-card.component */ "./src/app/components/cards/mini-car-card/mini-car-card.component.ts");
/* harmony import */ var _components_cards_mini_car_action_card_mini_car_action_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/cards/mini-car-action-card/mini-car-action-card.component */ "./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.ts");
/* harmony import */ var _components_cards_mini_mfg_recommendation_card_mini_mfg_recommendation_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component */ "./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.ts");
/* harmony import */ var _components_cards_general_card_general_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cards/general-card/general-card.component */ "./src/app/components/cards/general-card/general-card.component.ts");
/* harmony import */ var _components_forms_car_action_form_car_action_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forms/car-action-form/car-action-form.component */ "./src/app/components/forms/car-action-form/car-action-form.component.ts");
/* harmony import */ var _components_dashboards_main_dash_board_main_dash_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboards/main-dash-board/main-dash-board.component */ "./src/app/components/dashboards/main-dash-board/main-dash-board.component.ts");
/* harmony import */ var _components_Add_Items_add_mfg_recommendation_add_mfg_recommendation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component */ "./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.ts");
/* harmony import */ var _components_cards_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/cards/user-card/user-card.component */ "./src/app/components/cards/user-card/user-card.component.ts");
/* harmony import */ var _components_cards_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/cards/car-card/car-card.component */ "./src/app/components/cards/car-card/car-card.component.ts");
/* harmony import */ var _components_cards_car_action_card_car_action_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cards/car-action-card/car-action-card.component */ "./src/app/components/cards/car-action-card/car-action-card.component.ts");
/* harmony import */ var _components_cards_mfg_recommendation_card_mfg_recommendation_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/cards/mfg-recommendation-card/mfg-recommendation-card.component */ "./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.ts");
/* harmony import */ var _components_add_ons_add_ons_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/add-ons/add-ons.component */ "./src/app/components/add-ons/add-ons.component.ts");
/* harmony import */ var _components_Update_Items_update_car_update_car_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/Update-Items/update-car/update-car.component */ "./src/app/components/Update-Items/update-car/update-car.component.ts");
/* harmony import */ var _components_Update_Items_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/Update-Items/update-user/update-user.component */ "./src/app/components/Update-Items/update-user/update-user.component.ts");
/* harmony import */ var _components_Update_Items_update_car_action_update_car_action_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/Update-Items/update-car-action/update-car-action.component */ "./src/app/components/Update-Items/update-car-action/update-car-action.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboards_actions_dashboard_actions_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dashboards/actions-dashboard/actions-dashboard.component */ "./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.ts");
/* harmony import */ var _components_dashboards_mfg_recommendations_dashboard_mfg_recommendations_dashboard_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component */ "./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_Add_Items_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_3__["AddCarComponent"],
                _components_Add_Items_add_car_action_add_car_action_component__WEBPACK_IMPORTED_MODULE_4__["AddCarActionComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                _components_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _components_Item_details_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_12__["CarDetailsComponent"],
                _components_forms_general_form_general_form_component__WEBPACK_IMPORTED_MODULE_13__["GeneralFormComponent"],
                _components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_14__["UserFormComponent"],
                _Directives_formHostDirective_form_host_directive__WEBPACK_IMPORTED_MODULE_15__["FormHostDirective"],
                _components_forms_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_16__["CarFormComponent"],
                _components_dashboards_general_dashboard_general_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["GeneralDashboardComponent"],
                _Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_18__["CardHostDirective"],
                _components_cards_mini_car_card_mini_car_card_component__WEBPACK_IMPORTED_MODULE_19__["MiniCarCardComponent"],
                _components_cards_mini_car_action_card_mini_car_action_card_component__WEBPACK_IMPORTED_MODULE_20__["MiniCarActionCardComponent"],
                _components_cards_mini_mfg_recommendation_card_mini_mfg_recommendation_card_component__WEBPACK_IMPORTED_MODULE_21__["MiniMfgRecommendationCardComponent"],
                _components_cards_general_card_general_card_component__WEBPACK_IMPORTED_MODULE_22__["GeneralCardComponent"],
                _components_forms_car_action_form_car_action_form_component__WEBPACK_IMPORTED_MODULE_23__["CarActionFormComponent"],
                _components_dashboards_main_dash_board_main_dash_board_component__WEBPACK_IMPORTED_MODULE_24__["MainDashBoardComponent"],
                _components_Add_Items_add_mfg_recommendation_add_mfg_recommendation_component__WEBPACK_IMPORTED_MODULE_25__["AddMfgRecommendationComponent"],
                _components_cards_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_26__["UserCardComponent"],
                _components_cards_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_27__["CarCardComponent"],
                _components_cards_car_action_card_car_action_card_component__WEBPACK_IMPORTED_MODULE_28__["CarActionCardComponent"],
                _components_cards_mfg_recommendation_card_mfg_recommendation_card_component__WEBPACK_IMPORTED_MODULE_29__["MfgRecommendationCardComponent"],
                _components_add_ons_add_ons_component__WEBPACK_IMPORTED_MODULE_30__["AddOnsComponent"],
                _components_Update_Items_update_car_update_car_component__WEBPACK_IMPORTED_MODULE_31__["UpdateCarComponent"],
                _components_Update_Items_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_32__["UpdateUserComponent"],
                _components_Update_Items_update_car_action_update_car_action_component__WEBPACK_IMPORTED_MODULE_33__["UpdateCarActionComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_34__["HomeComponent"],
                _components_dashboards_actions_dashboard_actions_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["ActionsDashboardComponent"],
                _components_dashboards_mfg_recommendations_dashboard_mfg_recommendations_dashboard_component__WEBPACK_IMPORTED_MODULE_36__["MfgRecommendationsDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [
                _components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_14__["UserFormComponent"],
                _components_forms_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_16__["CarFormComponent"],
                _components_cards_mini_car_card_mini_car_card_component__WEBPACK_IMPORTED_MODULE_19__["MiniCarCardComponent"],
                _components_cards_mini_car_action_card_mini_car_action_card_component__WEBPACK_IMPORTED_MODULE_20__["MiniCarActionCardComponent"],
                _components_cards_mini_mfg_recommendation_card_mini_mfg_recommendation_card_component__WEBPACK_IMPORTED_MODULE_21__["MiniMfgRecommendationCardComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Add-Items/add-car-action/add-car-action.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/Add-Items/add-car-action/add-car-action.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Add-Items/add-car-action/add-car-action.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/Add-Items/add-car-action/add-car-action.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-form [data]=\"carAction\" [formType]=\"formType\"></app-general-form>\r\n"

/***/ }),

/***/ "./src/app/components/Add-Items/add-car-action/add-car-action.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Add-Items/add-car-action/add-car-action.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddCarActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarActionComponent", function() { return AddCarActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Classes_CarAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Classes/CarAction */ "./src/app/Classes/CarAction.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCarActionComponent = /** @class */ (function () {
    function AddCarActionComponent() {
        this.carAction = new _Classes_CarAction__WEBPACK_IMPORTED_MODULE_1__["CarAction"]();
        this.formType = 'carAction';
    }
    AddCarActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-car-action',
            template: __webpack_require__(/*! ./add-car-action.component.html */ "./src/app/components/Add-Items/add-car-action/add-car-action.component.html"),
            styles: [__webpack_require__(/*! ./add-car-action.component.css */ "./src/app/components/Add-Items/add-car-action/add-car-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCarActionComponent);
    return AddCarActionComponent;
}());



/***/ }),

/***/ "./src/app/components/Add-Items/add-car/add-car.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/Add-Items/add-car/add-car.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Add-Items/add-car/add-car.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/Add-Items/add-car/add-car.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-form [data]=\"car\" [formType]=\"formType\"></app-general-form>\r\n"

/***/ }),

/***/ "./src/app/components/Add-Items/add-car/add-car.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/Add-Items/add-car/add-car.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarComponent", function() { return AddCarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Classes_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Classes/Car */ "./src/app/Classes/Car.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCarComponent = /** @class */ (function () {
    function AddCarComponent() {
        this.car = new _Classes_Car__WEBPACK_IMPORTED_MODULE_1__["Car"]();
        this.formType = 'car';
    }
    AddCarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-car',
            template: __webpack_require__(/*! ./add-car.component.html */ "./src/app/components/Add-Items/add-car/add-car.component.html"),
            styles: [__webpack_require__(/*! ./add-car.component.css */ "./src/app/components/Add-Items/add-car/add-car.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCarComponent);
    return AddCarComponent;
}());



/***/ }),

/***/ "./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-form [data]=\"mfgRecommendation\" [formType]=\"formType\"></app-general-form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddMfgRecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMfgRecommendationComponent", function() { return AddMfgRecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Classes_MfgRecommendation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Classes/MfgRecommendation */ "./src/app/Classes/MfgRecommendation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddMfgRecommendationComponent = /** @class */ (function () {
    function AddMfgRecommendationComponent() {
        this.mfgRecommendation = new _Classes_MfgRecommendation__WEBPACK_IMPORTED_MODULE_1__["MfgRecommendation"]();
        this.formType = 'mfgRecomandation';
    }
    AddMfgRecommendationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-mfg-recommendation',
            template: __webpack_require__(/*! ./add-mfg-recommendation.component.html */ "./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.html"),
            styles: [__webpack_require__(/*! ./add-mfg-recommendation.component.css */ "./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddMfgRecommendationComponent);
    return AddMfgRecommendationComponent;
}());



/***/ }),

/***/ "./src/app/components/Item-details/car-details/car-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/Item-details/car-details/car-details.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.details{\r\n    width: 70%;\r\n}\r\n\r\n.sideBar{\r\n    width: 30%;\r\n}"

/***/ }),

/***/ "./src/app/components/Item-details/car-details/car-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/Item-details/car-details/car-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"details\">\r\n        <app-general-card [data]=\"car\" [ItemType]=\"ItemType\"></app-general-card>\r\n    </div>\r\n    <div class=\"sideBar\">\r\n        <ul class=\"nav flex-column\">\r\n            <li class=\"nav-item\">\r\n                <a routerLink=\"/car/{{car.Id}}/Actions\" routerLinkActive=\"active\" class=\"btn btn-primary\">Car Actions</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a routerLink=\"/car/{{car.Id}}/Manufacturer-recommendations\" routerLinkActive=\"active\" class=\"btn btn-primary\">Manufacturer recommendations</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a routerLink=\"/car/{{car.Id}}/Add-ons\" routerLinkActive=\"active\" class=\"btn btn-primary\">Add-ons</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link disabled\" href=\"#\">Next Service</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/Item-details/car-details/car-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/Item-details/car-details/car-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: CarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsComponent", function() { return CarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/car/http-car.service */ "./src/app/services/car/http-car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarDetailsComponent = /** @class */ (function () {
    function CarDetailsComponent(route, httpCarService) {
        this.route = route;
        this.httpCarService = httpCarService;
        this.ItemType = 'car';
    }
    CarDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Id = this.route.snapshot.paramMap.get('id');
        this.httpCarService.getCar(Id).subscribe(function (data) {
            _this.car = data;
        });
    };
    CarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-details',
            template: __webpack_require__(/*! ./car-details.component.html */ "./src/app/components/Item-details/car-details/car-details.component.html"),
            styles: [__webpack_require__(/*! ./car-details.component.css */ "./src/app/components/Item-details/car-details/car-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_2__["HttpCarService"]])
    ], CarDetailsComponent);
    return CarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/Update-Items/update-car-action/update-car-action.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-car-action/update-car-action.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Update-Items/update-car-action/update-car-action.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-car-action/update-car-action.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  update-car-action works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/Update-Items/update-car-action/update-car-action.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-car-action/update-car-action.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UpdateCarActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCarActionComponent", function() { return UpdateCarActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateCarActionComponent = /** @class */ (function () {
    function UpdateCarActionComponent() {
    }
    UpdateCarActionComponent.prototype.ngOnInit = function () {
    };
    UpdateCarActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-car-action',
            template: __webpack_require__(/*! ./update-car-action.component.html */ "./src/app/components/Update-Items/update-car-action/update-car-action.component.html"),
            styles: [__webpack_require__(/*! ./update-car-action.component.css */ "./src/app/components/Update-Items/update-car-action/update-car-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateCarActionComponent);
    return UpdateCarActionComponent;
}());



/***/ }),

/***/ "./src/app/components/Update-Items/update-car/update-car.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-car/update-car.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Update-Items/update-car/update-car.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-car/update-car.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-form [data]=\"car\" [formType]=\"formType\"></app-general-form>\r\n"

/***/ }),

/***/ "./src/app/components/Update-Items/update-car/update-car.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-car/update-car.component.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCarComponent", function() { return UpdateCarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/car/http-car.service */ "./src/app/services/car/http-car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateCarComponent = /** @class */ (function () {
    function UpdateCarComponent(route, httpCarService) {
        this.route = route;
        this.httpCarService = httpCarService;
        this.formType = 'car';
    }
    UpdateCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Id = this.route.snapshot.paramMap.get('id');
        this.httpCarService.getCar(Id).subscribe(function (data) {
            _this.car = data;
        });
    };
    UpdateCarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-car',
            template: __webpack_require__(/*! ./update-car.component.html */ "./src/app/components/Update-Items/update-car/update-car.component.html"),
            styles: [__webpack_require__(/*! ./update-car.component.css */ "./src/app/components/Update-Items/update-car/update-car.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_2__["HttpCarService"]])
    ], UpdateCarComponent);
    return UpdateCarComponent;
}());



/***/ }),

/***/ "./src/app/components/Update-Items/update-user/update-user.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-user/update-user.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Update-Items/update-user/update-user.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-user/update-user.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  update-user works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/Update-Items/update-user/update-user.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/Update-Items/update-user/update-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent() {
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
    };
    UpdateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__(/*! ./update-user.component.html */ "./src/app/components/Update-Items/update-user/update-user.component.html"),
            styles: [__webpack_require__(/*! ./update-user.component.css */ "./src/app/components/Update-Items/update-user/update-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/add-ons/add-ons.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/add-ons/add-ons.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-ons/add-ons.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/add-ons/add-ons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-ons works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/add-ons/add-ons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/add-ons/add-ons.component.ts ***!
  \*********************************************************/
/*! exports provided: AddOnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOnsComponent", function() { return AddOnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddOnsComponent = /** @class */ (function () {
    function AddOnsComponent() {
    }
    AddOnsComponent.prototype.ngOnInit = function () {
    };
    AddOnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-ons',
            template: __webpack_require__(/*! ./add-ons.component.html */ "./src/app/components/add-ons/add-ons.component.html"),
            styles: [__webpack_require__(/*! ./add-ons.component.css */ "./src/app/components/add-ons/add-ons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddOnsComponent);
    return AddOnsComponent;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Api_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Api/api-data.service */ "./src/app/services/Api/api-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(api) {
        this.api = api;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Api_api_data_service__WEBPACK_IMPORTED_MODULE_1__["ApiDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/car-action-card/car-action-card.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/cards/car-action-card/car-action-card.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/car-action-card/car-action-card.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cards/car-action-card/car-action-card.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  car-action-card works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/cards/car-action-card/car-action-card.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards/car-action-card/car-action-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CarActionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarActionCardComponent", function() { return CarActionCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarActionCardComponent = /** @class */ (function () {
    function CarActionCardComponent() {
    }
    CarActionCardComponent.prototype.ngOnInit = function () {
    };
    CarActionCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-action-card',
            template: __webpack_require__(/*! ./car-action-card.component.html */ "./src/app/components/cards/car-action-card/car-action-card.component.html"),
            styles: [__webpack_require__(/*! ./car-action-card.component.css */ "./src/app/components/cards/car-action-card/car-action-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarActionCardComponent);
    return CarActionCardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/car-card/car-card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/cards/car-card/car-card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/car-card/car-card.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/cards/car-card/car-card.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\r\n  <h4 class=\"card-title\">{{data.make + \" \" + data.model}}</h4>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">{{'license Plate:' + \" \" + data.licensePlate}}</li>\r\n    <li class=\"list-group-item\">{{'Mileage:' + \" \" + data.mileage}}</li>\r\n    <li class=\"list-group-item\">{{'next Action:' + \" \" + data.nextAction}}</li>\r\n    <li class=\"list-group-item\">{{'color:' + \" \" + data.color}}</li>\r\n    <li class=\"list-group-item\">{{'engineCode:' + \" \" + data.engineCode}}</li>\r\n    <li class=\"list-group-item\">{{'registrationDate:' + \" \" + data.registrationDate}}</li>\r\n    <li class=\"list-group-item\">{{'previousOwner:' + \" \" + data.previousOwner}}</li>\r\n    <li class=\"list-group-item\">{{'category:' + \" \" + data.category}}</li>\r\n    <li> <a routerLink=\"/car/{{data.Id}}/Addons\" routerLinkActive=\"active\" class=\"btn btn-primary\">AddOns</a></li>\r\n  </ul>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"btnEdit()\">Edit</button>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"btnDelete()\">Delete</button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/cards/car-card/car-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/cards/car-card/car-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CarCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarCardComponent", function() { return CarCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/car/http-car.service */ "./src/app/services/car/http-car.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarCardComponent = /** @class */ (function () {
    function CarCardComponent(httpCarService, router) {
        this.httpCarService = httpCarService;
        this.router = router;
    }
    CarCardComponent.prototype.ngOnInit = function () {
    };
    CarCardComponent.prototype.btnEdit = function () {
        this.router.navigate(["Cars/" + this.data.Id + "/Update"]);
    };
    CarCardComponent.prototype.btnDelete = function () {
        var _this = this;
        this.httpCarService.deleteCar(this.data.id).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['Cars']);
        }, function (err) {
            _this.httpCarService.handleError(err);
        });
    };
    CarCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-card',
            template: __webpack_require__(/*! ./car-card.component.html */ "./src/app/components/cards/car-card/car-card.component.html"),
            styles: [__webpack_require__(/*! ./car-card.component.css */ "./src/app/components/cards/car-card/car-card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_car_http_car_service__WEBPACK_IMPORTED_MODULE_1__["HttpCarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CarCardComponent);
    return CarCardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/general-card/general-card.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/cards/general-card/general-card.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/general-card/general-card.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/general-card/general-card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <ng-template appCardHost></ng-template>\r\n</div>\r\n<div class=\"col-md-6\">\r\n    <div class=\"card-img-bottom\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cards/general-card/general-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/general-card/general-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralCardComponent", function() { return GeneralCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Directives/cardHostDirective/card-host.directive */ "./src/app/Directives/cardHostDirective/card-host.directive.ts");
/* harmony import */ var _services_cardCompFact_card_comp_fact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cardCompFact/card-comp-fact.service */ "./src/app/services/cardCompFact/card-comp-fact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralCardComponent = /** @class */ (function () {
    function GeneralCardComponent(componentFactoryResolver, cardCompFactService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cardCompFactService = cardCompFactService;
    }
    GeneralCardComponent.prototype.ngOnInit = function () {
        var comp = this.cardCompFactService.getCardComp(this.ItemType);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        var viewContainerRef = this.appFormHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GeneralCardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GeneralCardComponent.prototype, "ItemType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_1__["CardHostDirective"]),
        __metadata("design:type", _Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_1__["CardHostDirective"])
    ], GeneralCardComponent.prototype, "appFormHost", void 0);
    GeneralCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-card',
            template: __webpack_require__(/*! ./general-card.component.html */ "./src/app/components/cards/general-card/general-card.component.html"),
            styles: [__webpack_require__(/*! ./general-card.component.css */ "./src/app/components/cards/general-card/general-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _services_cardCompFact_card_comp_fact_service__WEBPACK_IMPORTED_MODULE_2__["CardCompFactService"]])
    ], GeneralCardComponent);
    return GeneralCardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mfg-recommendation-card works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MfgRecommendationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfgRecommendationCardComponent", function() { return MfgRecommendationCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MfgRecommendationCardComponent = /** @class */ (function () {
    function MfgRecommendationCardComponent() {
    }
    MfgRecommendationCardComponent.prototype.ngOnInit = function () {
    };
    MfgRecommendationCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mfg-recommendation-card',
            template: __webpack_require__(/*! ./mfg-recommendation-card.component.html */ "./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.html"),
            styles: [__webpack_require__(/*! ./mfg-recommendation-card.component.css */ "./src/app/components/cards/mfg-recommendation-card/mfg-recommendation-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MfgRecommendationCardComponent);
    return MfgRecommendationCardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  car-action-card works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MiniCarActionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCarActionCardComponent", function() { return MiniCarActionCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiniCarActionCardComponent = /** @class */ (function () {
    function MiniCarActionCardComponent() {
    }
    MiniCarActionCardComponent.prototype.ngOnInit = function () {
    };
    MiniCarActionCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-action-card',
            template: __webpack_require__(/*! ./mini-car-action-card.component.html */ "./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.html"),
            styles: [__webpack_require__(/*! ./mini-car-action-card.component.css */ "./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MiniCarActionCardComponent);
    return MiniCarActionCardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/mini-car-card/mini-car-card.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/cards/mini-car-card/mini-car-card.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/mini-car-card/mini-car-card.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/mini-car-card/mini-car-card.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\r\n  <h4 class=\"card-title\">{{data.make + \" \" + data.model}}</h4>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">{{'license Plate:' + \" \" + data.licensePlate}}</li>\r\n    <li class=\"list-group-item\">{{'Mileage:' + \" \" + data.mileage}}</li>\r\n    <li class=\"list-group-item\">{{'next Action:' + \" \" + data.nextAction}}</li>\r\n  </ul>\r\n  <a routerLink=\"/car/{{data.Id}}\" routerLinkActive=\"active\" class=\"btn btn-primary\">More Details</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/cards/mini-car-card/mini-car-card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/mini-car-card/mini-car-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: MiniCarCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCarCardComponent", function() { return MiniCarCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiniCarCardComponent = /** @class */ (function () {
    function MiniCarCardComponent() {
    }
    MiniCarCardComponent.prototype.ngOnInit = function () {
    };
    MiniCarCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-card',
            template: __webpack_require__(/*! ./mini-car-card.component.html */ "./src/app/components/cards/mini-car-card/mini-car-card.component.html"),
            styles: [__webpack_require__(/*! ./mini-car-card.component.css */ "./src/app/components/cards/mini-car-card/mini-car-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MiniCarCardComponent);
    return MiniCarCardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mfg-recommendation-card works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MiniMfgRecommendationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniMfgRecommendationCardComponent", function() { return MiniMfgRecommendationCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiniMfgRecommendationCardComponent = /** @class */ (function () {
    function MiniMfgRecommendationCardComponent() {
    }
    MiniMfgRecommendationCardComponent.prototype.ngOnInit = function () {
    };
    MiniMfgRecommendationCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mfg-recommendation-card',
            template: __webpack_require__(/*! ./mini-mfg-recommendation-card.component.html */ "./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.html"),
            styles: [__webpack_require__(/*! ./mini-mfg-recommendation-card.component.css */ "./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MiniMfgRecommendationCardComponent);
    return MiniMfgRecommendationCardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/user-card/user-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/cards/user-card/user-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cards/user-card/user-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/user-card/user-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-card works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/cards/user-card/user-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/cards/user-card/user-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserCardComponent = /** @class */ (function () {
    function UserCardComponent() {
    }
    UserCardComponent.prototype.ngOnInit = function () {
    };
    UserCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-card',
            template: __webpack_require__(/*! ./user-card.component.html */ "./src/app/components/cards/user-card/user-card.component.html"),
            styles: [__webpack_require__(/*! ./user-card.component.css */ "./src/app/components/cards/user-card/user-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserCardComponent);
    return UserCardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-dashboard [Items]=\"actions\" [ItemType]=\"ItemType\"></app-general-dashboard>\r\n"

/***/ }),

/***/ "./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ActionsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsDashboardComponent", function() { return ActionsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_carAction_http_car_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/carAction/http-car-action.service */ "./src/app/services/carAction/http-car-action.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionsDashboardComponent = /** @class */ (function () {
    function ActionsDashboardComponent(route, httpCarActionsService) {
        this.route = route;
        this.httpCarActionsService = httpCarActionsService;
        this.ItemType = 'miniCarAction';
    }
    ActionsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Id = this.route.snapshot.paramMap.get('id');
        this.httpCarActionsService.getActionsOfCar(Id).subscribe(function (data) {
            _this.actions = data;
        });
    };
    ActionsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actions-dashboard',
            template: __webpack_require__(/*! ./actions-dashboard.component.html */ "./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./actions-dashboard.component.css */ "./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_carAction_http_car_action_service__WEBPACK_IMPORTED_MODULE_2__["HttpCarActionService"]])
    ], ActionsDashboardComponent);
    return ActionsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/general-dashboard/general-dashboard.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboards/general-dashboard/general-dashboard.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboards/general-dashboard/general-dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/dashboards/general-dashboard/general-dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"Items.length === 0\">{{'No '+ItemType+'s'}}</div>\r\n    <div class=\"card\" *ngFor=\"let item of Items\">\r\n        <div class=\"row\">\r\n            <app-general-card [data]=\"item\" [ItemType]=\"ItemType\"></app-general-card>\r\n        </div>\r\n    </div>\r\n    <button (click)=\"addItem()\">{{\"Add \" +ItemType}}</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboards/general-dashboard/general-dashboard.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboards/general-dashboard/general-dashboard.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GeneralDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDashboardComponent", function() { return GeneralDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Directives/cardHostDirective/card-host.directive */ "./src/app/Directives/cardHostDirective/card-host.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralDashboardComponent = /** @class */ (function () {
    function GeneralDashboardComponent(router) {
        this.router = router;
    }
    GeneralDashboardComponent.prototype.ngOnInit = function () {
    };
    GeneralDashboardComponent.prototype.addItem = function () {
        switch (this.ItemType) {
            case 'car':
                this.router.navigate(['Add-Car']);
                break;
            case 'carAction':
                this.router.navigate(['Add-Car-Action']);
                break;
            case 'mfgRecomandation':
                this.router.navigate(['Add-MFG-Recommendation']);
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GeneralDashboardComponent.prototype, "Items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GeneralDashboardComponent.prototype, "ItemType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_1__["CardHostDirective"]),
        __metadata("design:type", _Directives_cardHostDirective_card_host_directive__WEBPACK_IMPORTED_MODULE_1__["CardHostDirective"])
    ], GeneralDashboardComponent.prototype, "appFormHost", void 0);
    GeneralDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-dashboard',
            template: __webpack_require__(/*! ./general-dashboard.component.html */ "./src/app/components/dashboards/general-dashboard/general-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./general-dashboard.component.css */ "./src/app/components/dashboards/general-dashboard/general-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GeneralDashboardComponent);
    return GeneralDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/main-dash-board/main-dash-board.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboards/main-dash-board/main-dash-board.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboards/main-dash-board/main-dash-board.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboards/main-dash-board/main-dash-board.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-dashboard [Items]=\"cars\" [ItemType]=\"ItemType\"></app-general-dashboard>\r\n"

/***/ }),

/***/ "./src/app/components/dashboards/main-dash-board/main-dash-board.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/dashboards/main-dash-board/main-dash-board.component.ts ***!
  \************************************************************************************/
/*! exports provided: MainDashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashBoardComponent", function() { return MainDashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/car/http-car.service */ "./src/app/services/car/http-car.service.ts");
/* harmony import */ var _services_user_http_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user/http-user.service */ "./src/app/services/user/http-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainDashBoardComponent = /** @class */ (function () {
    function MainDashBoardComponent(httpCarService, httpUser) {
        this.httpCarService = httpCarService;
        this.httpUser = httpUser;
        this.ItemType = 'miniCar';
    }
    MainDashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.httpUser.userId;
        this.httpCarService.getCarsOfUser(this.userId).subscribe(function (data) {
            return _this.cars = data;
        });
    };
    MainDashBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-dash-board',
            template: __webpack_require__(/*! ./main-dash-board.component.html */ "./src/app/components/dashboards/main-dash-board/main-dash-board.component.html"),
            styles: [__webpack_require__(/*! ./main-dash-board.component.css */ "./src/app/components/dashboards/main-dash-board/main-dash-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_car_http_car_service__WEBPACK_IMPORTED_MODULE_1__["HttpCarService"], _services_user_http_user_service__WEBPACK_IMPORTED_MODULE_2__["HttpUserService"]])
    ], MainDashBoardComponent);
    return MainDashBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-dashboard [Items]=\"mfgRecommendations\" [ItemType]=\"ItemType\"></app-general-dashboard>\r\n"

/***/ }),

/***/ "./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MfgRecommendationsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfgRecommendationsDashboardComponent", function() { return MfgRecommendationsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_mfgRecomondations_http_mfg_recommendations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mfgRecomondations/http-mfg-recommendations.service */ "./src/app/services/mfgRecomondations/http-mfg-recommendations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MfgRecommendationsDashboardComponent = /** @class */ (function () {
    function MfgRecommendationsDashboardComponent(route, httpMfgRecomondationsService) {
        this.route = route;
        this.httpMfgRecomondationsService = httpMfgRecomondationsService;
        this.ItemType = 'miniMfgRecomandation';
    }
    MfgRecommendationsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Id = this.route.snapshot.paramMap.get('id');
        this.httpMfgRecomondationsService.getMfgRecommendationsOfCar(Id).subscribe(function (data) {
            _this.mfgRecommendations = data;
        });
    };
    MfgRecommendationsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mfg-recommendations-dashboard',
            template: __webpack_require__(/*! ./mfg-recommendations-dashboard.component.html */ "./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./mfg-recommendations-dashboard.component.css */ "./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_mfgRecomondations_http_mfg_recommendations_service__WEBPACK_IMPORTED_MODULE_2__["HttpMfgRecommendationsService"]])
    ], MfgRecommendationsDashboardComponent);
    return MfgRecommendationsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/car-action-form/car-action-form.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/car-action-form/car-action-form.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forms/car-action-form/car-action-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/forms/car-action-form/car-action-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  car-action-form works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/forms/car-action-form/car-action-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/car-action-form/car-action-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CarActionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarActionFormComponent", function() { return CarActionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarActionFormComponent = /** @class */ (function () {
    function CarActionFormComponent() {
    }
    CarActionFormComponent.prototype.ngOnInit = function () {
    };
    CarActionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-action-form',
            template: __webpack_require__(/*! ./car-action-form.component.html */ "./src/app/components/forms/car-action-form/car-action-form.component.html"),
            styles: [__webpack_require__(/*! ./car-action-form.component.css */ "./src/app/components/forms/car-action-form/car-action-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarActionFormComponent);
    return CarActionFormComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/car-form/car-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/forms/car-form/car-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forms/car-form/car-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/forms/car-form/car-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"btnAddCar(form.value)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mb-3\">\r\n      <label>LicensePlate</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"licensePlate\"\r\n             [(ngModel)]=\"data.licensePlate\" #licensePlate=\"ngModel\" required>\r\n      <div class=\"messageError\"\r\n           *ngIf=\"licensePlate.invalid && (licensePlate.dirty || licensePlate.touched)\">\r\n        licensePlate is required.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 mb-3\">\r\n      <label>Make</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"make\" [(ngModel)]=\"data.make\"\r\n             #make=\"ngModel\" required>\r\n      <div class=\"messageError\" *ngIf=\"make.invalid && (make.dirty || make.touched)\">\r\n        make is required.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <label>Model</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"model\" [(ngModel)]=\"data.model\"\r\n           #model=\"ngModel\" required>\r\n    <div class=\"messageError\" *ngIf=\"model.invalid && (model.dirty || model.touched)\">\r\n      model is required.\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <label>Color</label>\r\n    <select class=\"form-control\" name=\"color\" [(ngModel)]=\"data.color\" #color=\"ngModel\" required>\r\n      <option *ngFor=\"let c of colors\" [value]=\"c\">{{c}}</option>\r\n    </select>\r\n    <div class=\"messageError\" *ngIf=\"color.invalid && (color.dirty || color.touched)\">\r\n      Color is required.\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 mb-3\">\r\n    <label>EngineCode</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"engineCode\"\r\n           [(ngModel)]=\"data.engineCode\" #engineCode=\"ngModel\" required>\r\n    <div class=\"messageError\"\r\n         *ngIf=\"engineCode.invalid && (engineCode.dirty || engineCode.touched)\">\r\n      EngineCode is required.\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <label>Registration Date</label>\r\n    <input type=\"date\" class=\"form-control\" name=\"registrationDate\"\r\n           [(ngModel)]=\"data.registrationDate\" #registrationDate=\"ngModel\" required>\r\n    <div class=\"messageError\"\r\n         *ngIf=\"registrationDate.invalid && (registrationDate.dirty || registrationDate.touched)\">\r\n      Registration Date is required.\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 mb-3\">\r\n    <label> previousOwner</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"previousOwner\"\r\n           [(ngModel)]=\"data.previousOwner\" #previousOwner=\"ngModel\" required>\r\n    <div class=\"messageError\"\r\n         *ngIf=\"previousOwner.invalid && (previousOwner.dirty || previousOwner.touched)\">\r\n      previousOwner is required.\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <label>Mileage</label>\r\n    <input type=\"number\" class=\"form-control\" name=\"mileage\"\r\n           [(ngModel)]=\"data.mileage\" #mileage=\"ngModel\" required pattern=\"^[0-9]*$\">\r\n    <div class=\"messageError\"\r\n         *ngIf=\"mileage.invalid && (mileage.dirty || mileage.touched)\">\r\n      <div *ngIf=\"mileage?.errors.required\">\r\n        Mileage is required.\r\n      </div>\r\n      <div *ngIf=\"mileage?.errors.pattern\">\r\n        Mileage have to include only numbers.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <label>Category</label>\r\n    <select class=\"form-control\" name=\"catagory\" [(ngModel)]=\"data.category\" #category=\"ngModel\" required>\r\n      <option *ngFor=\"let ca of categories\" [value]=\"ca\">{{ca}}</option>\r\n    </select>\r\n    <div class=\"messageError\" *ngIf=\"category.invalid && (category.dirty || category.touched)\">\r\n      Category is required.\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\"\r\n          [disabled]=\"form.invalid\">Add Car</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/forms/car-form/car-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/forms/car-form/car-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: CarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarFormComponent", function() { return CarFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Api_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/Api/api-data.service */ "./src/app/services/Api/api-data.service.ts");
/* harmony import */ var _Arrays_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Arrays/Colors */ "./src/app/Arrays/Colors.ts");
/* harmony import */ var _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/car/http-car.service */ "./src/app/services/car/http-car.service.ts");
/* harmony import */ var _Arrays_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Arrays/Category */ "./src/app/Arrays/Category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarFormComponent = /** @class */ (function () {
    function CarFormComponent(mapService, httpCar, router) {
        this.mapService = mapService;
        this.httpCar = httpCar;
        this.router = router;
        this.colors = _Arrays_Colors__WEBPACK_IMPORTED_MODULE_3__["colors"];
        this.categories = _Arrays_Category__WEBPACK_IMPORTED_MODULE_5__["category"];
    }
    CarFormComponent.prototype.ngOnInit = function () {
    };
    CarFormComponent.prototype.btnAddCar = function (car) {
        var _this = this;
        this.httpCar.addCar(car).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/Cars']);
        }, function (err) {
            _this.httpCar.handleError(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarFormComponent.prototype, "data", void 0);
    CarFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-form',
            template: __webpack_require__(/*! ./car-form.component.html */ "./src/app/components/forms/car-form/car-form.component.html"),
            styles: [__webpack_require__(/*! ./car-form.component.css */ "./src/app/components/forms/car-form/car-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Api_api_data_service__WEBPACK_IMPORTED_MODULE_2__["ApiDataService"], _services_car_http_car_service__WEBPACK_IMPORTED_MODULE_4__["HttpCarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CarFormComponent);
    return CarFormComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/general-form/general-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/general-form/general-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forms/general-form/general-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/general-form/general-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 offset-sm-3\">\r\n        <ng-template appFormHost></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/forms/general-form/general-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/general-form/general-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralFormComponent", function() { return GeneralFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Directives_formHostDirective_form_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Directives/formHostDirective/form-host.directive */ "./src/app/Directives/formHostDirective/form-host.directive.ts");
/* harmony import */ var _services_formCompFact_form_comp_factory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/formCompFact/form-comp-factory.service */ "./src/app/services/formCompFact/form-comp-factory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralFormComponent = /** @class */ (function () {
    function GeneralFormComponent(componentFactoryResolver, formFactService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.formFactService = formFactService;
    }
    GeneralFormComponent.prototype.ngOnInit = function () {
        var comp = this.formFactService.getFormComp(this.formType);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        var viewContainerRef = this.appFormHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GeneralFormComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GeneralFormComponent.prototype, "formType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Directives_formHostDirective_form_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormHostDirective"]),
        __metadata("design:type", _Directives_formHostDirective_form_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormHostDirective"])
    ], GeneralFormComponent.prototype, "appFormHost", void 0);
    GeneralFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-form',
            template: __webpack_require__(/*! ./general-form.component.html */ "./src/app/components/forms/general-form/general-form.component.html"),
            styles: [__webpack_require__(/*! ./general-form.component.css */ "./src/app/components/forms/general-form/general-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _services_formCompFact_form_comp_factory_service__WEBPACK_IMPORTED_MODULE_2__["FormCompFactoryService"]])
    ], GeneralFormComponent);
    return GeneralFormComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/user-form/user-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/forms/user-form/user-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.center{\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n}\r\n\r\n.btn{\r\n    width: 160px;\r\n}"

/***/ }),

/***/ "./src/app/components/forms/user-form/user-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/user-form/user-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"btnAddUser(form.value)\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n            <label>First name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstName\"\r\n                   [(ngModel)]=\"data.firstName\" #firstName=\"ngModel\" required>\r\n            <div class=\"messageError\"\r\n                 *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\r\n                First name is required.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n            <label>Last name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"data.lastName\"\r\n                   #lastName=\"ngModel\" required>\r\n            <div class=\"messageError\" *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\r\n                Last Name is required.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label>Username</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\"\r\n               [(ngModel)]=\"data.userName\" #username=\"ngModel\" required>\r\n        <div class=\"messageError\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\r\n            Your username is required.\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\r\n               [(ngModel)]=\"data.password\" #password=\"ngModel\" required minlength=\"4\" required>\r\n        <div class=\"messageError\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n            <div *ngIf=\"password?.errors.required\">\r\n                Password is required.\r\n            </div>\r\n            <div *ngIf=\"password?.errors.minlength\">\r\n                Password must be at least 4 characters long.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label>Date of birth</label>\r\n        <input type=\"date\" class=\"form-control\" name=\"dateOfBirth\"\r\n               [(ngModel)]=\"data.dateOfBirth\" #dateOfBirth=\"ngModel\" required>\r\n        <div class=\"messageError\"\r\n             *ngIf=\"dateOfBirth.invalid && (dateOfBirth.dirty || dateOfBirth.touched)\">\r\n            Your date or birth is required.\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label>Gender</label>\r\n        <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"data.gender\" #gender=\"ngModel\" required>\r\n            <option *ngFor=\"let g of genders\" [value]=\"g\">{{g}}</option>\r\n        </select>\r\n        <div class=\"messageError\" *ngIf=\"gender.invalid && (gender.dirty || gender.touched)\">\r\n            Your gender is required.\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label>phone number</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"phone\"\r\n               [(ngModel)]=\"data.phoneNumber\" #phone=\"ngModel\" required pattern=\"^[0-9]*$\"\r\n        >\r\n        <div class=\"messageError\"\r\n             *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\r\n            <div *ngIf=\"phone?.errors.required\">\r\n                phone number is required.\r\n            </div>\r\n            <div *ngIf=\"phone?.errors.pattern\">\r\n                phone number have to include only numbers.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"data.email\" #email=\"ngModel\" required email>\r\n        <div class=\"messageError\"\r\n             *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n            <div *ngIf=\"email?.errors.required\">\r\n                Email is required.\r\n            </div>\r\n            <div *ngIf=\"email?.errors.email\">\r\n                Email must be a valid email address\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n            <label>Country</label>\r\n            <select class=\"form-control\" name=\"country\" [(ngModel)]=\"data.country\" #country=\"ngModel\">\r\n                <option *ngFor=\"let c of countries\" [value]=\"c\">{{c}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n            <label>City</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"data.city\"\r\n                   #city=\"ngModel\">\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label>Street</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"street\"\r\n               [(ngModel)]=\"data.street\" #street=\"ngModel\">\r\n    </div>\r\n    <div class=\"buttons\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">Sign Up</button>\r\n        <button class=\"btn btn-primary center\" (click)=\"clear()\">Clear</button>\r\n        <button class=\"btn btn-primary\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/forms/user-form/user-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/forms/user-form/user-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Arrays_Genders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Arrays/Genders */ "./src/app/Arrays/Genders.ts");
/* harmony import */ var _services_user_http_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user/http-user.service */ "./src/app/services/user/http-user.service.ts");
/* harmony import */ var _services_Api_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/Api/api-data.service */ "./src/app/services/Api/api-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(mapService, httpUser, router) {
        this.mapService = mapService;
        this.httpUser = httpUser;
        this.router = router;
        this.genders = _Arrays_Genders__WEBPACK_IMPORTED_MODULE_1__["genders"];
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.$countries.subscribe(function (data) {
            _this.countries = data.map(function (rec) { return rec.name; });
        });
    };
    UserFormComponent.prototype.btnAddUser = function (user) {
        var _this = this;
        this.httpUser.addUser(user).subscribe(function (data) {
            console.log(data);
            _this.httpUser.userId = data.Id;
            _this.router.navigate(['/Cars']);
        }, function (err) {
            _this.httpUser.handleError(err);
        });
    };
    UserFormComponent.prototype.clear = function () {
    };
    UserFormComponent.prototype.cancel = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "data", void 0);
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/components/forms/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/components/forms/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Api_api_data_service__WEBPACK_IMPORTED_MODULE_3__["ApiDataService"], _services_user_http_user_service__WEBPACK_IMPORTED_MODULE_2__["HttpUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('keeper.jpg')no-repeat center center fixed;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#extended-nav {\r\n    padding: 0 30px;\r\n    background: #283e4a;\r\n    border-top: none;\r\n    box-shadow: none;\r\n    height: 75px;\r\n}\r\n\r\n.logo{\r\n    height: 60px;\r\n    width: 70px;\r\n}\r\n\r\n.title{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"extended-nav\" class=\"navbar\">\r\n    <span class=\"navbar-brand title\"><a routerLink=\"/Home\" routerLinkActive=\"active\"><img class=\"logo navbar-brand\" src=\"../../../assets/logo.jpeg\"></a>CarKeeper</span>\r\n    <div class=\"navbar-brand ml-auto\">\r\n        <button type=\"button\" class=\"btn btn-primary navbar-brand\" routerLink=\"/Sign_In\" routerLinkActive=\"active\">Sign In</button>\r\n        <button type=\"button\" class=\"btn btn-primary navbar-brand\" (click)=\"btnSignUp()\" routerLink=\"/Sign_Up\" routerLinkActive=\"active\">Sign Up</button>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.btnSignUp = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found-component/page-not-found-component.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/page-not-found-component/page-not-found-component.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found-component/page-not-found-component.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/page-not-found-component/page-not-found-component.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  404 - Not Found\r\n</h3>\r\n"

/***/ }),

/***/ "./src/app/components/page-not-found-component/page-not-found-component.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/page-not-found-component/page-not-found-component.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found-component',
            template: __webpack_require__(/*! ./page-not-found-component.component.html */ "./src/app/components/page-not-found-component/page-not-found-component.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found-component.component.css */ "./src/app/components/page-not-found-component/page-not-found-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageError{\r\n    width: 100%;\r\n    margin-top: .25rem;\r\n    font-size: 80%;\r\n    color: #dc3545;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-general-form [data]=\"user\" [formType]=\"formType\"></app-general-form>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Classes_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Classes/User */ "./src/app/Classes/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.user = new _Classes_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.formType = 'user';
    }
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    display: block;\r\n}\r\n\r\ninput{\r\n    width: 350px;\r\n}"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 offset-sm-3\">\r\n                <h2>Login</h2>\r\n                <form #form=\"ngForm\" (ngSubmit)=\"btnLogin()\">\r\n                    <div class=\"form-group\">\r\n                        <label >Username</label>\r\n                        <input type=\"text\" class=\"formControl\" name=\"username\" ngModel #userName=\"ngModel\" required/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Password</label>\r\n                        <input type=\"password\" class=\"formControl\" name=\"password\" ngModel #password=\"ngModel\"\r\n                               required/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-primary\">Login</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.btnLogin = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page-not-found-component/page-not-found-component.component */ "./src/app/components/page-not-found-component/page-not-found-component.component.ts");
/* harmony import */ var _components_dashboards_main_dash_board_main_dash_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/dashboards/main-dash-board/main-dash-board.component */ "./src/app/components/dashboards/main-dash-board/main-dash-board.component.ts");
/* harmony import */ var _components_Add_Items_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Add-Items/add-car/add-car.component */ "./src/app/components/Add-Items/add-car/add-car.component.ts");
/* harmony import */ var _components_Add_Items_add_car_action_add_car_action_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Add-Items/add-car-action/add-car-action.component */ "./src/app/components/Add-Items/add-car-action/add-car-action.component.ts");
/* harmony import */ var _components_Add_Items_add_mfg_recommendation_add_mfg_recommendation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component */ "./src/app/components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component.ts");
/* harmony import */ var _components_Item_details_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Item-details/car-details/car-details.component */ "./src/app/components/Item-details/car-details/car-details.component.ts");
/* harmony import */ var _components_add_ons_add_ons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/add-ons/add-ons.component */ "./src/app/components/add-ons/add-ons.component.ts");
/* harmony import */ var _components_Update_Items_update_car_update_car_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Update-Items/update-car/update-car.component */ "./src/app/components/Update-Items/update-car/update-car.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboards_actions_dashboard_actions_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/dashboards/actions-dashboard/actions-dashboard.component */ "./src/app/components/dashboards/actions-dashboard/actions-dashboard.component.ts");
/* harmony import */ var _components_dashboards_mfg_recommendations_dashboard_mfg_recommendations_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component */ "./src/app/components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'Sign_In', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'Sign_Up', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'Home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'Cars/:id/Actions', component: _components_dashboards_actions_dashboard_actions_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["ActionsDashboardComponent"] },
    { path: 'Cars/:id/Manufacturer-recommendations', component: _components_dashboards_mfg_recommendations_dashboard_mfg_recommendations_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["MfgRecommendationsDashboardComponent"] },
    { path: 'Cars/:id/Update', component: _components_Update_Items_update_car_update_car_component__WEBPACK_IMPORTED_MODULE_12__["UpdateCarComponent"] },
    { path: 'Cars/:id/AddOns', component: _components_add_ons_add_ons_component__WEBPACK_IMPORTED_MODULE_11__["AddOnsComponent"] },
    { path: 'Cars/:id', component: _components_Item_details_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_10__["CarDetailsComponent"] },
    { path: 'Cars', component: _components_dashboards_main_dash_board_main_dash_board_component__WEBPACK_IMPORTED_MODULE_6__["MainDashBoardComponent"] },
    { path: 'Add-Car', component: _components_Add_Items_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_7__["AddCarComponent"] },
    { path: 'Add-Car-Action', component: _components_Add_Items_add_car_action_add_car_action_component__WEBPACK_IMPORTED_MODULE_8__["AddCarActionComponent"] },
    { path: 'Add-MFG-Recommendation', component: _components_Add_Items_add_mfg_recommendation_add_mfg_recommendation_component__WEBPACK_IMPORTED_MODULE_9__["AddMfgRecommendationComponent"] },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: _components_page_not_found_component_page_not_found_component_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/Api/api-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/Api/api-data.service.ts ***!
  \**************************************************/
/*! exports provided: ApiDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDataService", function() { return ApiDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiDataService = /** @class */ (function () {
    function ApiDataService(http) {
        this.http = http;
        this.$countries = this.http.get('https://restcountries.eu/rest/v2/all?fields=name');
    }
    ApiDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiDataService);
    return ApiDataService;
}());



/***/ }),

/***/ "./src/app/services/car/http-car.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/car/http-car.service.ts ***!
  \**************************************************/
/*! exports provided: HttpCarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCarService", function() { return HttpCarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpCarService = /** @class */ (function () {
    function HttpCarService(http) {
        this.http = http;
    }
    HttpCarService.prototype.getCarsOfUser = function (userid) {
        return this.http.get("api/user-main/" + userid);
    };
    HttpCarService.prototype.getCar = function (carId) {
        return this.http.get("api/car/" + carId);
    };
    HttpCarService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
    };
    HttpCarService.prototype.addCar = function (car) {
        return this.http.post('api/car', car);
    };
    HttpCarService.prototype.deleteCar = function (Id) {
        return this.http.delete("api/car/" + Id);
    };
    HttpCarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpCarService);
    return HttpCarService;
}());



/***/ }),

/***/ "./src/app/services/carAction/http-car-action.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/carAction/http-car-action.service.ts ***!
  \***************************************************************/
/*! exports provided: HttpCarActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCarActionService", function() { return HttpCarActionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpCarActionService = /** @class */ (function () {
    function HttpCarActionService(http) {
        this.http = http;
    }
    HttpCarActionService.prototype.getActionsOfCar = function (carId) {
        return this.http.get("api/car-actions/" + carId);
    };
    HttpCarActionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpCarActionService);
    return HttpCarActionService;
}());



/***/ }),

/***/ "./src/app/services/cardCompFact/card-comp-fact.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/cardCompFact/card-comp-fact.service.ts ***!
  \*****************************************************************/
/*! exports provided: CardCompFactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCompFactService", function() { return CardCompFactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_cards_mini_car_card_mini_car_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/cards/mini-car-card/mini-car-card.component */ "./src/app/components/cards/mini-car-card/mini-car-card.component.ts");
/* harmony import */ var _components_cards_mini_car_action_card_mini_car_action_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cards/mini-car-action-card/mini-car-action-card.component */ "./src/app/components/cards/mini-car-action-card/mini-car-action-card.component.ts");
/* harmony import */ var _components_cards_mini_mfg_recommendation_card_mini_mfg_recommendation_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component */ "./src/app/components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component.ts");
/* harmony import */ var _components_cards_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cards/car-card/car-card.component */ "./src/app/components/cards/car-card/car-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardCompFactService = /** @class */ (function () {
    function CardCompFactService() {
    }
    CardCompFactService.prototype.getCardComp = function (name) {
        switch (name) {
            case 'car':
                return _components_cards_car_card_car_card_component__WEBPACK_IMPORTED_MODULE_4__["CarCardComponent"];
            case 'miniCar':
                return _components_cards_mini_car_card_mini_car_card_component__WEBPACK_IMPORTED_MODULE_1__["MiniCarCardComponent"];
            case 'miniCarAction':
                return _components_cards_mini_car_action_card_mini_car_action_card_component__WEBPACK_IMPORTED_MODULE_2__["MiniCarActionCardComponent"];
            case 'miniMfgRecomandation':
                return _components_cards_mini_mfg_recommendation_card_mini_mfg_recommendation_card_component__WEBPACK_IMPORTED_MODULE_3__["MiniMfgRecommendationCardComponent"];
        }
    };
    CardCompFactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CardCompFactService);
    return CardCompFactService;
}());



/***/ }),

/***/ "./src/app/services/formCompFact/form-comp-factory.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/formCompFact/form-comp-factory.service.ts ***!
  \********************************************************************/
/*! exports provided: FormCompFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCompFactoryService", function() { return FormCompFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/forms/user-form/user-form.component */ "./src/app/components/forms/user-form/user-form.component.ts");
/* harmony import */ var _components_forms_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/forms/car-form/car-form.component */ "./src/app/components/forms/car-form/car-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormCompFactoryService = /** @class */ (function () {
    function FormCompFactoryService() {
    }
    FormCompFactoryService.prototype.getFormComp = function (name) {
        switch (name) {
            case 'user':
                return _components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__["UserFormComponent"];
            case 'car':
                return _components_forms_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_2__["CarFormComponent"];
        }
    };
    FormCompFactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormCompFactoryService);
    return FormCompFactoryService;
}());



/***/ }),

/***/ "./src/app/services/mfgRecomondations/http-mfg-recommendations.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/services/mfgRecomondations/http-mfg-recommendations.service.ts ***!
  \********************************************************************************/
/*! exports provided: HttpMfgRecommendationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMfgRecommendationsService", function() { return HttpMfgRecommendationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpMfgRecommendationsService = /** @class */ (function () {
    function HttpMfgRecommendationsService(http) {
        this.http = http;
    }
    HttpMfgRecommendationsService.prototype.getMfgRecommendationsOfCar = function (carId) {
        return this.http.get("api/Manufacturer-recommendations/" + carId);
    };
    HttpMfgRecommendationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpMfgRecommendationsService);
    return HttpMfgRecommendationsService;
}());



/***/ }),

/***/ "./src/app/services/user/http-user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/user/http-user.service.ts ***!
  \****************************************************/
/*! exports provided: HttpUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUserService", function() { return HttpUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpUserService = /** @class */ (function () {
    function HttpUserService(http) {
        this.http = http;
    }
    HttpUserService.prototype.addUser = function (user) {
        return this.http.post('api/sign-up', user);
    };
    HttpUserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
    };
    HttpUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpUserService);
    return HttpUserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WebBeast\CarKeeper-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map