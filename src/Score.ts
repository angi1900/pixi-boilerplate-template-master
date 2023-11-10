import * as PIXI from "pixi.js";

export class Score extends PIXI.Text {
    private static readonly SCORE_MESSAGE: string = "SCORE";

    private createTextStyle: PIXI.TextStyle = new PIXI.TextStyle({
        fontFamily: "Gotham",
        fontSize: 25,
        fill: "white",
        stroke: 0xff004d,
        strokeThickness: 3,
        dropShadow: true,
        dropShadowColor: 0xd1418,
        dropShadowAngle: Math.PI / 6,
    });

    score: number;

    constructor() {
        super(`${Score.SCORE_MESSAGE} : 0`);
        this.x = 30;
        this.y = 30;
        this.style = this.createTextStyle;
        this.score = 0;
    }

    update(): void {
        this.score += 1;
        this.text = `${Score.SCORE_MESSAGE} : ${this.score}`;
    }
}
