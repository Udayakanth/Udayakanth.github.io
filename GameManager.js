class GameManager {
  allCircles = [];
  allTiles = [];
  allTilesB = [];

  constructor() {
    console.log("Game Manager....");
    //this.test();
    this.test2();
    createjs.Ticker.addEventListener("tick", this.ticker.bind(this));
  }

  ticker(evt) {
    console.log("GM ticker...");
    //this.c1.update();
    for (let c = 0; c < 5; c++) {
      //this.allCircles[c].update();
    }
  }

  test2() {
    console.log("test 2");

    let tileCount = 0;
    //Arranging Tiles
    for (let h = 0; h < 4; h++)
      for (let c = 0; c < 4; c++) {
        this.allTiles.push(new Tile());
        this.allTiles[tileCount].init(5 + 50 * c, 15 + h * 25, 70, 40);
        this.allTiles[tileCount].shadow = new createjs.Shadow(
          "#000000",
          5,
          5,
          10
        );

        this.allTilesB.push(new Tile());
        this.allTilesB[tileCount].init(5 + 50 * c, 190 + h * 25, 70, 40);
        this.allTilesB[tileCount].shadow = new createjs.Shadow(
          "#000000",
          5,
          5,
          10
        );

        tileCount++;
      }
  }

  test() {
    for (let c = 0; c < 5; c++) {
      this.allCircles.push(new Circle());
      this.allCircles[c].init(
        100,
        2.5 * c * CIRCLE_RADIUS,
        CIRCLE_RADIUS * 0.5 * (1 + Math.random())
      );
      this.allCircles[c].shadow = new createjs.Shadow("#000000", 5, 5, 10);
      this.allTiles.push(new Tile());
      this.allTiles[c].init(50 * c, 259, 40, 40);
      this.allTiles[c].shadow = new createjs.Shadow("#000000", 5, 5, 10);
    }

    /*
    var roundedRectTest = new createjs.Shape();
    var x = 40,
      y = 40,
      w = canvas.width * 0.3;
    var h = canvas.height * 0.1,
      radiusTL = 5,
      radiusTR = 5,
      radiusBR = 5,
      radiusBL = 5;
    roundedRectTest.graphics
      .beginFill("DeepSkyBlue")
      .drawRoundRectComplex(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL);
    var rr2 = new createjs.Shape();
    rr2.graphics
      .beginFill("DeepSkyBlue")
      .drawRoundRect(canvas.width * 0.5, canvas.height * 0.5, 50, 30, 5);
    stage.addChild(rr2);
    stage.addChild(roundedRectTest);
    */
  }
  tick(evt) {
    console.log("gm tick...");
  }
}
