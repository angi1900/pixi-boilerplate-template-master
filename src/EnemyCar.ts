import * as PIXI from "pixi.js";

export class EnemyCar extends PIXI.Sprite {
    private velocity = 4;
    private readonly screenHeight: number;
    private readonly screenWidth: number;

    constructor(screenWidth: number, screenHeigth: number) {
        super(PIXI.Texture.from("enemyCar"));
        this.screenHeight = screenHeigth;
        this.screenWidth = screenWidth;

        this.width = 89;
        this.height = 110;
        this.x = 200;
        this.y = 300;
        PIXI.Ticker.shared.add(this.update, this);
    }

    private update(deltaTime: number): void {
        this.y = this.y + this.velocity * deltaTime;
        if (this.y > this.screenHeight) {
            this.y = 0;
        }
    }

    setPositions(positionX: number, positionY: number): void {
        this.x = positionX;
        this.y = positionY;
    }
}
