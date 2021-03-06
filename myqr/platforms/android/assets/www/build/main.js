webpackJsonp([0],{

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, auth, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.database = database;
        this.usuarioItem = {};
        //this.usuarioListRef$ = this.database.list('usuarios');
        this.database.list('usuarios').subscribe(function (usuarios) { return _this.usuarios = usuarios; }, function (error) { return console.log(error); });
    }
    LoginPage.prototype.login = function () {
        console.log(this.usuarios);
        //this.ingreso = this.buscarUsuario(this.usuarioItem);
        this.buscarUsuario(this.usuarioItem);
    };
    LoginPage.prototype.buscarUsuario = function (usuario) {
        //let retorno = "El usuario no esta registrado";
        var _this = this;
        //let miUsuario: UsuarioItem;
        //let mail="pame@gmail.com";
        this.usuarios.forEach(function (usuarios) {
            if ((usuarios.nombre == usuario.nombre) && (usuarios.clave == usuario.clave)) {
                //return retorno = "El usuario se logeo";
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
            }
            else {
                //alert("El usuario no se encuentra en la base") 
            }
        });
        //console.log();
        //return retorno;
        //forma utilizando autentificacion de usaurio por mail
        /*this.auth.auth.signInWithEmailAndPassword(mail,usuario.clave.toString()).then(r=>{console.log(r);});
        return "ss";*/
    };
    LoginPage.prototype.loguearAdmin = function () {
        this.usuarioItem.nombre = "admin";
        this.usuarioItem.clave = 11;
    };
    LoginPage.prototype.loguearUsuario = function () {
        this.usuarioItem.nombre = "usuario";
        this.usuarioItem.clave = 33;
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/ezequiel/proyectoIonic/myqr/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="naranja">\n    <ion-title text-center>Login de Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item class="animated flash">\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="usuarioItem.nombre"></ion-input>\n    </ion-item>\n      \n    <ion-item class="animated flash">\n      <ion-label floating>Clave</ion-label>\n      <ion-input type="password" [(ngModel)]="usuarioItem.clave"></ion-input>\n    </ion-item>    \n  </ion-list>\n  \n  <div padding>\n    <button ion-button color="naranja" (click)="login()" class="animated tada" block>Entrar</button>\n    <button ion-button color="verde" (click)="loguearAdmin()" class="animated tada" full>Como Administrador</button>\n    <button ion-button color="gris" (click)="loguearUsuario()" class="animated tada" full>Como Usuario</button> \n  </div>\n\n  <ion-list>\n    <ion-item>\n      <h2>{{ingreso}}</h2>\n    </ion-item>\n  </ion-list>\n\n  <!--<ion-list>\n    <ion-item *ngFor="let usuario of usuarioListRef$ | async">\n      <h2>Nombre: {{usuario.nombre}}</h2>\n      <h3>Clave: {{usuario.clave}}</h3>\n      <h3>ID: {{usuario.id}}</h3>\n      <h3>Sexo: {{usuario.sexo}}</h3>\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n\n'/*ion-inline-end:"/home/ezequiel/proyectoIonic/myqr/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_carga_lista_carga__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






//mi alert

var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, barcodeScanner, toast, database, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.codigoItem = {};
        this.codigosListRef$ = this.database.list('codigos-lista');
        this.codigosCargaRef$ = this.database.list('codigos');
        this.codigosListRef$.subscribe(function (datos) { _this.listaCodigo = datos; });
        this.codigosCargaRef$.subscribe(function (datos) { _this.listaCodigoCargado = datos; });
    }
    MenuPage.prototype.scan = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.options = {
                    prompt: "Escanea el QR"
                };
                this.barcodeScanner.scan(this.options).then(function (barcodeData) {
                    _this.scanData = barcodeData;
                    _this.navParams.data = barcodeData;
                    _this.verificarCodigos(barcodeData.text.trim());
                }, function (err) {
                    console.log("Sucedio un error : " + err);
                });
                return [2 /*return*/];
            });
        });
    };
    MenuPage.prototype.verificarCodigos = function (datosBar) {
        var ban = false;
        var exist = false;
        var codigoAgregar;
        if (this.elCodigoExiste(datosBar)) {
            exist = true;
            this.listaCodigo.forEach(function (codigo) {
                if (codigo.clave == datosBar) {
                    ban = true;
                    return;
                }
            });
        }
        else {
        }
        if (exist) {
            if (!ban) {
                console.log("------------ Se agrega el codigo -----------");
                this.agregarCodigo(this.traerUnCodigo(datosBar));
                this.presentValor("se agrega codigo ");
            }
            else {
                console.log("------------ No se agrega el codigo --------------");
                this.presentValor("La carga se realizo con anterioridad ");
            }
        }
    };
    MenuPage.prototype.listaCarga = function () {
        //this.navCtrl.setRoot(ListaCargaPage,this.navParams);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lista_carga_lista_carga__["a" /* ListaCargaPage */]);
    };
    MenuPage.prototype.traerUnCodigo = function (codigo) {
        var codigoBusqueda;
        this.listaCodigoCargado.forEach(function (micodigo) {
            if (micodigo.clave == codigo) {
                codigoBusqueda = micodigo;
                // this.presentValor("el codigo se traer: "+micodigo.clave);
                return;
            }
        });
        //this.presentValor("El codigo:"+ codigo.clave);
        return codigoBusqueda;
    };
    MenuPage.prototype.elCodigoExiste = function (micodigo) {
        var ban = false;
        this.listaCodigoCargado.forEach(function (codigo) {
            if (codigo.clave == micodigo) {
                ban = true;
                //this.presentValor("El codigo existe:"+codigo.clave);
                return;
            }
        });
        if (ban) {
            console.log("------------- El codigo existe en la lista ----------------");
            //this.presentValor("El codigo existe: ");
        }
        else {
            console.log("------------- El codigo no existe -------------------------");
            this.miToast("El codigo no existe ");
        }
        return ban;
    };
    // mis alert  
    MenuPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Problema',
            subTitle: 'El codigo ya fue utilizado',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    MenuPage.prototype.presentOK = function () {
        var alert = this.alertCtrl.create({
            title: 'Exito',
            subTitle: 'Se realizo la carga',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    MenuPage.prototype.presentValor = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Exito',
            subTitle: text,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    MenuPage.prototype.agregarCodigo = function (codigos) {
        //console.log(shoppingItem);
        try {
            this.codigosListRef$.push({
                clave: codigos.clave,
                valor: Number(codigos.valor)
            });
            //this.presentValor("Se agrego el codigo");
            //Reser de shoppingItem
            this.codigoItem = {};
            return true;
        }
        catch (error) {
            return false;
        }
    };
    MenuPage.prototype.modificar = function () {
    };
    MenuPage.prototype.miToast = function (mensaje) {
        this.toast.show(mensaje, '5000', 'center').subscribe(function (toast) {
            console.log(toast);
        });
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/home/ezequiel/proyectoIonic/myqr/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="naranja">\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <button ion-button class="animated bounceIn" corlor="naranja" (click)="scan()"  full>Escanear QR </button>\n  <button ion-button class="animated bounceIn" corlor="naranja" (click)="listaCarga()" full>Codigos cargados </button>\n <!-- <button ion-button (click)="verificarCodigos(\'2786f4877b9091dcad7f35751bfcf5d5ea712b2f\')">Test </button>-->\n  <div *ngIf="scanData">\n      <p>Scanned Text : {{scanData.text}} </p>\n      <p>Scanned Format : {{scanData.format}} </p>\n      <p>Scanned Cancelled : {{scanData.cancelled}}</p>\n  </div>\n\n <!-- \n <ion-list>\n\n     <ion-item *ngFor="let item of codigosListRef$ | async">\n      <h2>Clave: {{item.clave}}</h2>\n      <h3>Valor: {{item.valor}}</h3>\n      \n    </ion-item>\n  \n  </ion-list>\n-->\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/proyectoIonic/myqr/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaCargaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//mi alert

var ListaCargaPage = (function () {
    function ListaCargaPage(navCtrl, navParams, alertCtrl, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.total = 0;
        this.codigosListRef$ = this.database.list('codigos-lista');
        this.codigosListRef$.subscribe(function (datos) {
            _this.lista = datos;
        });
        this.contar();
    }
    ListaCargaPage.prototype.contar = function () {
        var _this = this;
        this.lista.forEach(function (codigo) {
            console.log(codigo.valor);
            _this.total += codigo.valor;
        });
    };
    ListaCargaPage.prototype.presentValor = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Exito',
            subTitle: text,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    return ListaCargaPage;
}());
ListaCargaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-carga',template:/*ion-inline-start:"/home/ezequiel/proyectoIonic/myqr/src/pages/lista-carga/lista-carga.html"*/'\n<ion-header>\n\n  <ion-navbar color="naranja">\n    <ion-title>Lista de Cargas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!--  Recorro la lista de la referencia a codigos$-->\n     <ion-item *ngFor="let item of codigosListRef$ | async">\n      <h2>Clave: {{item.clave}}</h2>\n      <h3>Valor: {{item.valor}}</h3>\n    </ion-item>\n  </ion-list>\n  <h1>Total: {{total}}</h1>\n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/proyectoIonic/myqr/src/pages/lista-carga/lista-carga.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], ListaCargaPage);

//# sourceMappingURL=lista-carga.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lista_carga_lista_carga__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__firebase_credentials__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//modulo para la conexion a la base de datos



//modulo para utlizar en barcoder

//modulo para utilizar toast

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_lista_carga_lista_carga__["a" /* ListaCargaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            //inicializamos las credenciales de conexion a la base de firebase
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            //modulo necesario para la conexion
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_lista_carga_lista_carga__["a" /* ListaCargaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__["a" /* Toast */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [{
                title: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]
            }];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ezequiel/proyectoIonic/myqr/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ezequiel/proyectoIonic/myqr/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyCCRDy4FM_YX9kzaFh7tVu6bK-YDITZCYw",
    authDomain: "myionic-b20cb.firebaseapp.com",
    databaseURL: "https://myionic-b20cb.firebaseio.com",
    projectId: "myionic-b20cb",
    storageBucket: "myionic-b20cb.appspot.com",
    messagingSenderId: "982727241718"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map