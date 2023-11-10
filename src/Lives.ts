import * as PIXI from "pixi.js";
import { FieldSize } from "./Constants";

export class Lives extends PIXI.Text {
    private static readonly LIVES_MESSAGE = "LIVES";

    private createStyle: PIXI.TextStyle = new PIXI.TextStyle({
        fontFamily: "Gotham",
        fontSize: 25,
        fill: "white",
        stroke: 0xff004d,
        strokeThickness: 3,
        dropShadow: true,
        dropShadowColor: 0xd1418,
        dropShadowAngle: Math.PI / 6,
    });
    lives: number;

    constructor() {
        super(`${Lives.LIVES_MESSAGE} : 3`);
        this.x = FieldSize.WIDTH / 2 + this.width + 30;
        this.y = 30;
        this.style = this.createStyle;
        this.lives = 3;
    }

    update(): void {
        this.lives -= 1;
        this.text = `${Lives.LIVES_MESSAGE} : ${this.lives}`;
    }
}
