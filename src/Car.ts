import * as PIXI from "pixi.js";
import { FieldSize } from "./Constants";

export class Car extends PIXI.Sprite {
    protected app: PIXI.Application;
    constructor() {
        super(PIXI.Texture.from("myCar"));
        this.width = 90;
        this.height = 110;
        this.position.set(FieldSize.WIDTH / 2, 550);
        this.anchor.set(0.5, 0.5);
    }
    moveLeft(): void {
        this.x -= 5;
    }

    moveRight(): void {
        this.x += 5;
    }
}
