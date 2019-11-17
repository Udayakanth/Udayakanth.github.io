class Tile extends createjs.Shape {
  type = null;
  dimension = {};

  constructor() {
    console.log("Tile....");
    this.init();
  }

  init() {
    console.log("init...");
  }
}
