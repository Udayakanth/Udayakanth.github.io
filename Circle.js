class Circle {
  circle = null;
  constructor() {
    console.log("Circle.....");
  }

  init(x, y, radius, container = stage) {
    this.circle = new createjs.Shape();
    this.circle.graphics
      .beginStroke("#45B4FF")
      .beginFill("DeepSkyBlue")
      .drawCircle(0, 0, radius);
    this.circle.x = x;
    this.circle.y = y;
    container.addChild(this.circle);

    //this.circle.addEventListener("tick", this.update.bind(this));
    this.circle.addEventListener("click", function(event) {
      circleClicked = true;
      //alert("clicked");
    });
  }

  update(evt) {
    //console.log("update evt = ", evt);
    if (!circleClicked) {
      this.circle.x += 5.0;
      if (this.circle.x > canvas.width) {
        this.circle.x = -this.circle.graphics.command.radius * 0.5;
      }
    }
  }
}
