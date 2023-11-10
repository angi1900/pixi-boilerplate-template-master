import * as PIXI from "pixi.js";
export class Background {
    protected lanes = 5;
    protected linesContainer = new PIXI.Container();
    private appWidth = 800;
    private appHeight = 600;
    protected gameSpeed = 5;
    protected xRoadStart: any;
    protected xRoadEnd: any;
    protected lanesPos: any;
    public container: PIXI.Container;

    constructor(appWidth: number, appHeight: number, gameSpeed: number, lanes: number) {
        this.lanes = lanes;
        this.container = null;

        this.appWidth = appWidth;
        this.appHeight = appHeight;
        this.gameSpeed = gameSpeed + 2;

        this.xRoadStart = null;
        this.xRoadEnd = null;

        this.lanesPos = [];

        this.create();
    }

    createRoad(x: number, y: number, width: number, height: number): PIXI.Graphics {
        const line = new PIXI.Graphics();

        line.beginFill(0xf646464);
        line.drawRect(0, 0, width, height);
        line.endFill();

        line.position.set(x, y);

        return line;
    }

    createLine({ x = 0, y = 0, width = 6, height = 44, color = 0xffffff }): PIXI.Graphics {
        const line = new PIXI.Graphics();

        line.beginFill(color);
        line.drawRect(0, 0, width, height);
        line.endFill();

        line.position.set(x, y);

        return line;
    }

    createYellowLine(x: number, height: number): PIXI.Graphics {
        return this.createLine({
            x: x,
            height: height,
            color: 0xffaff00,
        });
    }

    create(): void {
        const background = new PIXI.Container();

        const gridWidth = 10;
        const gridMinWidth = this.appWidth / gridWidth;
        const playableGrid = 6;
        const nonPlayableGrid = gridWidth - playableGrid;
        const nonPlayableWidth = nonPlayableGrid * gridMinWidth;

        const roadX = nonPlayableWidth / 2;
        const roadWidth = gridMinWidth * playableGrid;

        const road = this.createRoad(roadX, 0, roadWidth, this.appHeight);

        background.addChild(road);

        this.xRoadStart = road.x;
        this.xRoadEnd = road.x + road.width;

        background.addChild(this.createYellowLine(this.xRoadStart, this.appHeight));
        background.addChild(this.createYellowLine(this.xRoadEnd, this.appHeight));

        const totalWidthPerLane = road.width / this.lanes / 2;

        // for (let i = 1; i <= this.lanes - 1; i++) {
        //   background.addChild(this.createYellowLine(this.xRoadStart + totalWidthPerLane * i, this.appHeight));
        //  }

        const linesContainer = new PIXI.Container();
        const lineDistanceFromStart = 0;

        for (let j = 1; j <= this.lanes + 1; j++) {
            const laneStart = this.xRoadStart + totalWidthPerLane * j - lineDistanceFromStart;

            for (let i = 0; i <= this.appHeight * 2; i = i + 40 + 44) {
                linesContainer.addChild(
                    this.createLine({
                        x: laneStart,
                        y: -this.appHeight + i + 26,
                    })
                );
            }

            this.lanesPos.push({
                x: laneStart - lineDistanceFromStart / 4,
            });

            this.lanesPos.push({
                x: laneStart - lineDistanceFromStart,
            });
        }

        background.addChild(linesContainer);

        this.container = background;
        this.linesContainer = linesContainer;
    }

    animate(): void {
        this.linesContainer.position.y = this.linesContainer.position.y + this.gameSpeed;

        if (this.linesContainer.position.y >= this.appHeight) {
            this.linesContainer.position.y = this.linesContainer.position.y - this.appHeight + 16;
            console.log("ANIMATING");
        }
    }
}
