"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var PIXI = require("pixi.js");
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        window.onload = function () {
            _this.startLoadingAssets();
        };
    }
    Main.prototype.onAssetsLoaded = function () {
        this.createRenderer();
    };
    Main.prototype.startLoadingAssets = function () {
        var _this = this;
        var loader = PIXI.Loader.shared;
        loader.add("enemyCar", "./assets/Car.png");
        loader.add("myCar", "./assets/Audi.png");
        loader.onComplete.once(function () {
            _this.onAssetsLoaded();
        });
        loader.load();
    };
    Main.prototype.createRenderer = function () {
        this.app = new PIXI.Application({
            width: Main.GAME_WIDTH,
            height: Main.GAME_HEIGHT,
            backgroundColor: 0xA4CAFD,
            resolution: 1,
            antialias: true,
        });
        document.body.appendChild(this.app.view);
    };
    Main.GAME_WIDTH = 1024;
    Main.GAME_HEIGHT = 768;
    return Main;
}());
exports.Main = Main;
