class Tile extends createjs.Shape {
  type = null;
  dimension = {};

  constructor() {
    super();
    console.log("Tile....");
    //this.init();
  }

  init(x, y, width, height, container = stage) {
    this.graphics.beginFill("#5DC9E8").drawRect(x, y, width, height);
    this.x = x;
    this.y = y;
    container.addChild(this);
    console.log("init...");
  }
}
