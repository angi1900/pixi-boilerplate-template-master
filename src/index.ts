import * as PIXI from "pixi.js";
import { Car } from "./Car";
import { EnemyCar } from "./EnemyCar";
import { Score } from "./Score";
import { Lives } from "./Lives";
import { Background } from "./Background";
import { KeyboardController } from "./Constants";
import { Back } from "gsap";

export class Main {
    public car!: Car;
    public enemyCar!: EnemyCar;
    public score!: Score;
    public lives!: Lives;
    private gameWidth = 800;
    private gameHeight = 600;
    private app!: PIXI.Application;
    private background: Background;

    constructor() {
        window.onload = (): void => {
            this.startLoadingAssets();

            console.log("StartLoadingAssets!!");
        };
    }

    private onAssetsLoaded(): void {
        this.createRenderer();
        this.keyboardFunctionality();

        console.log("OnAssetsLoaded!!!!!!");
    }

    private startLoadingAssets(): void {
        const loader = PIXI.Loader.shared;
        loader.add("enemyCar", "./assets/Car.png");
        loader.add("myCar", "./assets/Audi.png");
        loader.onComplete.once(() => {
            this.onAssetsLoaded();
        });
        loader.load();
        console.log("STARTLOADINGASSETS");
    }

    private createRenderer() {
        this.app = new PIXI.Application({
            width: this.gameWidth,
            height: this.gameHeight,

            resolution: 1,
            antialias: true,
        });

        const gameSpeed = 5;
        const lanes = 2;
        this.app.stage.sortableChildren = true;
        const scenario = new Background(this.app.renderer.width, this.app.renderer.height, gameSpeed, lanes);

        this.car = new Car();
        this.score = new Score();
        this.lives = new Lives();
        this.enemyCar = new EnemyCar(this.gameWidth, this.gameHeight);
        this.app.stage.addChild(scenario.container);
        this.app.stage.addChild(this.car);
        this.app.stage.addChild(this.score);
        this.app.stage.addChild(this.lives);
        this.app.stage.addChild(this.enemyCar);

        document.body.appendChild(this.app.view);
        console.log("DOCUMENT.BODY");
    }

    private getKey(e: string): void {
        if (e == "ArrowLeft") {
            this.car.moveLeft();
        } else if (e == "ArrowRight") {
            this.car.moveRight();
        }
    }

    public keyboardFunctionality(): void {
        window.addEventListener("keydown", (e: KeyboardEvent) => {
            if (KeyboardController[e.key]) {
                KeyboardController[e.key].pressed = true;
            }
        });

        window.addEventListener("keyup", (e: KeyboardEvent) => {
            if (KeyboardController[e.key]) {
                KeyboardController[e.key].pressed = false;
            }
        });
        console.log(this);
        this.app.ticker.add(() => {
            Object.keys(KeyboardController).forEach((key) => {
                if (KeyboardController[key].pressed == true) {
                    this.getKey(key);
                }
            });
        });
    }
}

new Main();
