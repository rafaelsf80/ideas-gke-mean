(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <!-- <div class=\"row\">\n    <div class=\"col-12\">\n      <h3 underline>Aplicación para la gestión de Ideas</h3>\n    </div>\n  </div> -->\n  <div class=\"row mt-5\">\n    <div class=\"col-12 offset-1\">\n\n      <router-outlet></router-outlet>\n      <p></p>\n      <p></p>\n      <h1>Lista de ideas</h1>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n            <tr>\n                <th>Fecha</th>\n                <th>Título</th>\n                <th>Descripcion</th>\n                <th>Estado</th>\n                <th>Tags</th>\n                <th>Acciones</th>   \n            </tr>\n        </thead>\n        <tbody>\n            <tr \n                *ngFor=\"let inic of arrIniciativas; let par = even; let impar = odd\">\n                <td>{{inic.fecha}}</td>\n                <td>{{inic.titulo}}</td>\n                <td>{{inic.descripcion}}</td>\n                <td>{{inic.estado}}</td>\n                <td>{{inic.tags}}</td>\n                <td>\n                    <button class=\"btn btn-primary btn-sm\">Ver</button>\n                    <button class=\"btn btn-success btn-sm\">Editar</button>\n                    <button class=\"btn btn-success btn-danger btn-sm\">Borrar</button>\n                </td>\n            </tr>\n        </tbody>\n      </table>   \n      <p></p>\n      <button class=\"btn btn-block btn-outline-info\" (click)=\"open()\">Proponer nueva idea</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/formulario/formulario.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/formulario/formulario.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h3 underline>Nueva Idea</h3>\n      </div>\n    </div>\n\n<form [formGroup]=\"formulario\" (ngSubmit)=\"crearPersona()\">\n    <div class=\"form-group\">\n        <label>Titulo</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"titulo\">\n    </div>\n    <div class=\"error\" *ngIf=\"formulario.controls.titulo.errors?.required && \n    formulario.controls.titulo.touched \">\n        El campo Titulo es requerido\n    </div>\n\n    <div class=\"error\" *ngIf=\"formulario.controls.titulo.errors?.minlength && \n    formulario.controls.titulo.touched\">\n        El campo Titulo debe tener un mínimo de {{formulario.controls.titulo.errors.minlength.requiredLength}} caracteres.\n        Tú has escrito {{formulario.controls.titulo.errors.minlength.actualLength}} caracter(es).\n    </div>\n    <div>\n        <p>Valid: {{ formulario.controls['titulo'].valid }}</p>\n        <p>Errors - {{ formulario.controls['titulo'].errors | json }}</p>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Descripcion</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"descripcion\">\n    </div>\n    <div class=\"form-group\">\n        <label>Adjuntos</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"adjuntos\">\n    </div>\n    <div class=\"form-group\">\n        <label>Tags</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"tags\">\n    </div>\n    <input type=\"submit\" [disabled]=\"!formulario.valid\" value=\"Enviar\" class=\"btn btn-block btn-success\">\n</form>\n</div>\n\n<p>Valid: {{ formulario.valid }} </p>\n<p>Pristine: {{ formulario.pristine }} </p>\n<p>Touch: {{ formulario.touched }} </p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lista-usuarios/lista-usuarios.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lista-usuarios/lista-usuarios.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>lista-usuarios works!</p>\n<table>\n    <thead>\n        <tr>\n            <th>Nombre</th>\n            <th>Apellidos</th>\n            <th>Puntos</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr \n            *ngFor=\"let usu of arrUsuarios; let par = even; let impar = odd\"          \n            [ngClass]=\"{'fila-par': par, 'fila-impar': !par}\">\n            <td>{{usu.nombre}}</td>\n            <td>{{usu.apellidos}}</td>\n            <td>{{usu.puntos}}</td>\n        </tr>\n    </tbody>\n</table> -->\n<h1>Lista de usuarios</h1>\n<ul class=\"list-group list-group-horizontal\">           \n    <li *ngFor=\"let usu of arrUsuarios\" class=\"list-group-item\">\n        <span class=\"badge badge-primary badge-pill\">{{usu.puntos}}</span>\n        <span class=\"\"> {{usu.nombre + \" \" + usu.apellidos}}</span>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">Gestión de ideas</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <!-- <a class=\"nav-link\" [href]=\"open()\">Nueva idea <span class=\"sr-only\">(current)</span></a> -->\n          <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button> -->\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Administrar</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['dashboard']\">Estadísticas</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['usuarios']\">Usuarios</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\">\n        <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-usuarios/lista-usuarios.component */ "./src/app/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");






const routes = [
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'formulario', component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["FormularioComponent"] },
    { path: 'usuarios', component: _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_3__["ListaUsuariosComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] }
    // { path: '**', redirectTo: 'principal' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fila-par {\n  background-color: #334953\n  }\n  \n.fila-impar {\n  background-color: lightgray\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtFQUNBOztBQUVGO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGEtcGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDk1M1xuICB9XG4gIFxuLmZpbGEtaW1wYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXlcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
/* harmony import */ var _iniciativas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iniciativas.service */ "./src/app/iniciativas.service.ts");





let AppComponent = class AppComponent {
    constructor(modalService, iniciativasService) {
        this.modalService = modalService;
        this.iniciativasService = iniciativasService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.arrIniciativas = yield this.iniciativasService.getAllP();
        });
    }
    open() {
        //const modalRef = this.modalService.open(ModalComponent);
        const modalRef = this.modalService.open(_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_3__["FormularioComponent"]);
        modalRef.componentInstance.title = 'About';
    }
};
AppComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _iniciativas_service__WEBPACK_IMPORTED_MODULE_4__["IniciativasService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-usuarios/lista-usuarios.component */ "./src/app/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_6__["ListaUsuariosComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__["FormularioComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__["FormularioComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/data/iniciativas.db.ts":
/*!****************************************!*\
  !*** ./src/app/data/iniciativas.db.ts ***!
  \****************************************/
/*! exports provided: INICIATIVAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INICIATIVAS", function() { return INICIATIVAS; });
const INICIATIVAS = [
    {
        id: 1,
        fecha: '22-06-2019',
        titulo: 'Maquina de cafe',
        descripcion: 'Poner una máquina de café en cada una de las plantas',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        adjuntos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        estado: 'pendiente',
        tags: 'wellbeing'
    },
    {
        id: 2,
        fecha: '22-06-2019',
        titulo: 'Parking',
        descripcion: 'Contratar servicios de parking',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Ken_Follett_official.jpg',
        adjuntos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        estado: 'pendiente',
        tags: 'wellbeing'
    },
    {
        id: 3,
        fecha: '22-06-2019',
        titulo: 'Cámaras',
        descripcion: 'Instalación de cámaras de seguridad para prevenir robos',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Firma_de_Javier_Sierra_%28Sant_Jordi_2009%29.jpg/220px-Firma_de_Javier_Sierra_%28Sant_Jordi_2009%29.jpg',
        adjuntos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        estado: 'cancelada',
        tags: 'seguridad'
    },
    {
        id: 4,
        fecha: '22-06-2019',
        titulo: 'Sueldo',
        descripcion: 'Subir el sueldo un 80% a todos los empleados',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Carlos_Ruiz_Zaf%C3%B3n_-_002.jpg/220px-Carlos_Ruiz_Zaf%C3%B3n_-_002.jpg',
        estado: 'aprobada',
        tags: 'wellbeing'
    },
    {
        id: 5,
        fecha: '22-06-2019',
        titulo: 'Vuelos',
        descripcion: 'Que todos los vuelos sean en business class',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Isabel_Allende_-_001.jpg/220px-Isabel_Allende_-_001.jpg',
        adjuntos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        estado: 'implementada',
        tags: 'wellbeing'
    },
    {
        id: 6,
        fecha: '22-06-2019',
        titulo: 'Otro6',
        descripcion: 'Descripción6',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/486px-J._K._Rowling_2010.jpg',
        adjuntos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        estado: 'aprobada',
        tags: 'wellbeing'
    },
    {
        id: 7,
        fecha: '22-06-2019',
        titulo: 'Otro7',
        descripcion: 'Descripción7',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Margaret_Atwood_Eden_Mills_Writers_Festival_2006.jpg/477px-Margaret_Atwood_Eden_Mills_Writers_Festival_2006.jpg',
        adjuntos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        estado: 'pendiente',
        tags: 'rrhh'
    },
    {
        id: 8,
        fecha: '22-06-2019',
        titulo: 'Otro8',
        descripcion: 'Descripción8',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Almudena_Grandes.jpg/400px-Almudena_Grandes.jpg',
        adjuntos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Juan_Gomez-Jurado.jpg/220px-Juan_Gomez-Jurado.jpg',
        estado: 'aprobada',
        tags: 'seguridad'
    }
];


/***/ }),

/***/ "./src/app/data/usuarios.db.ts":
/*!*************************************!*\
  !*** ./src/app/data/usuarios.db.ts ***!
  \*************************************/
/*! exports provided: USUARIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUARIOS", function() { return USUARIOS; });
const USUARIOS = [
    {
        id: 1,
        nombre: 'Juan',
        apellidos: 'Gómez-Jurado',
        email: 'user1@gmail.com',
        puntos: '5'
    },
    {
        id: 2,
        nombre: 'Ken',
        apellidos: 'Follet',
        email: 'user2@gmail.com',
        puntos: '7'
    },
    {
        id: 3,
        nombre: 'Javier',
        apellidos: 'Sierra',
        email: 'user3@gmail.com',
        puntos: '19'
    },
    {
        id: 4,
        nombre: 'Carlos',
        apellidos: 'Ruiz Zafón',
        email: 'user4@gmail.com',
        puntos: '4'
    },
    {
        id: 5,
        nombre: 'Isabel',
        apellidos: 'Allende',
        email: 'user5@gmail.com',
        puntos: '21'
    },
    {
        id: 6,
        nombre: 'Joanne',
        apellidos: 'Rowling',
        email: 'user6@gmail.com',
        puntos: '4'
    },
    {
        id: 7,
        nombre: 'Margaret',
        apellidos: 'Atwood',
        email: 'user7@gmail.com',
        puntos: '0'
    },
    {
        id: 8,
        nombre: 'Almudena',
        apellidos: 'Grandes',
        email: 'user8@gmail.com',
        puntos: '0'
    }
];


/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulario/formulario.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-valid.ng-touched {\n    border: 1px solid green\n}\n\n/* si tiene esas dos clases */\n\ninput.ng-invalid.ng-touched {\n    border: 1px solid red\n}\n\n.error {\n    color: red;\n    font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBLDZCQUE2Qjs7QUFDN0I7SUFDSTtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLXZhbGlkLm5nLXRvdWNoZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuXG59XG5cbi8qIHNpIHRpZW5lIGVzYXMgZG9zIGNsYXNlcyAqL1xuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWRcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let FormularioComponent = class FormularioComponent {
    constructor() {
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            titulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)
            ]),
            adjuntos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)
            ]),
        });
    }
    ngOnInit() {
        let tituloControl = this.formulario.controls.titulo;
        tituloControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400)).subscribe(value => {
            console.log(value);
        });
    }
    crearPersona() {
        console.log(this.formulario.value);
    }
};
FormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formulario',
        template: __webpack_require__(/*! raw-loader!./formulario.component.html */ "./node_modules/raw-loader/index.js!./src/app/formulario/formulario.component.html"),
        styles: [__webpack_require__(/*! ./formulario.component.css */ "./src/app/formulario/formulario.component.css")]
    })
], FormularioComponent);



/***/ }),

/***/ "./src/app/iniciativas.service.ts":
/*!****************************************!*\
  !*** ./src/app/iniciativas.service.ts ***!
  \****************************************/
/*! exports provided: IniciativasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciativasService", function() { return IniciativasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_iniciativas_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/iniciativas.db */ "./src/app/data/iniciativas.db.ts");



let IniciativasService = class IniciativasService {
    constructor() { }
    getAll() {
        return _data_iniciativas_db__WEBPACK_IMPORTED_MODULE_2__["INICIATIVAS"];
    }
    getAllP() {
        // let prom = new Promise((resolve, reject) => {
        //   resolve(ESCRITORES)
        // })
        // return prom
        return Promise.resolve(_data_iniciativas_db__WEBPACK_IMPORTED_MODULE_2__["INICIATIVAS"]);
    }
    getById(id) {
        // En vez de recorrer el array, uso la función find de JS
        let escritor = _data_iniciativas_db__WEBPACK_IMPORTED_MODULE_2__["INICIATIVAS"].find((item) => {
            return item.id == id;
        });
        return escritor;
        // Abreviado: return ESCRITORES.find(item => item.id == id)
    }
};
IniciativasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IniciativasService);



/***/ }),

/***/ "./src/app/lista-usuarios/lista-usuarios.component.css":
/*!*************************************************************!*\
  !*** ./src/app/lista-usuarios/lista-usuarios.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhLXVzdWFyaW9zL2xpc3RhLXVzdWFyaW9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/lista-usuarios/lista-usuarios.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lista-usuarios/lista-usuarios.component.ts ***!
  \************************************************************/
/*! exports provided: ListaUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuariosComponent", function() { return ListaUsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuarios.service */ "./src/app/usuarios.service.ts");



let ListaUsuariosComponent = class ListaUsuariosComponent {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.arrEscritores = this.escritoresService.getAll()
            // this.escritoresService.getAllP().then((ESCRITORES) => {
            //   this.arrEscritores = ESCRITORES
            //})
            this.arrUsuarios = yield this.usuariosService.getAllP();
        });
    }
};
ListaUsuariosComponent.ctorParameters = () => [
    { type: _usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] }
];
ListaUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-usuarios',
        template: __webpack_require__(/*! raw-loader!./lista-usuarios.component.html */ "./node_modules/raw-loader/index.js!./src/app/lista-usuarios/lista-usuarios.component.html"),
        styles: [__webpack_require__(/*! ./lista-usuarios.component.css */ "./src/app/lista-usuarios/lista-usuarios.component.css")]
    })
], ListaUsuariosComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToPage(ruta) {
        console.log(ruta);
        this.router.navigate([ruta]);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/usuarios.service.ts":
/*!*************************************!*\
  !*** ./src/app/usuarios.service.ts ***!
  \*************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_usuarios_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/usuarios.db */ "./src/app/data/usuarios.db.ts");



let UsuariosService = class UsuariosService {
    constructor() { }
    getAll() {
        return _data_usuarios_db__WEBPACK_IMPORTED_MODULE_2__["USUARIOS"];
    }
    getAllP() {
        // let prom = new Promise((resolve, reject) => {
        //   resolve(ESCRITORES)
        // })
        // return prom
        return Promise.resolve(_data_usuarios_db__WEBPACK_IMPORTED_MODULE_2__["USUARIOS"]);
    }
    getById(id) {
        // En vez de recorrer el array, uso la función find de JS
        let escritor = _data_usuarios_db__WEBPACK_IMPORTED_MODULE_2__["USUARIOS"].find((item) => {
            return item.id == id;
        });
        return escritor;
        // Abreviado: return ESCRITORES.find(item => item.id == id)
    }
};
UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuariosService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rafaelsanchez/MEAN/ideas-gke-dev/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map