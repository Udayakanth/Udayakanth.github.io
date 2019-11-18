class Circle extends createjs.Shape {
  //circle = null;
  constructor() {
    super();
    console.log("Circle.....");
  }

  init(x, y, radius, container = stage) {
    //this.circle = new createjs.Shape();

    this.graphics
      .beginStroke("#45B4FF")
      .beginFill("DeepSkyBlue")
      .drawCircle(0, 0, radius);

    this.x = x;
    this.y = y;
    container.addChild(this);

    //this.circle.addEventListener("tick", this.update.bind(this));
    this.addEventListener("click", function(event) {
      circleClicked = true;
      //alert("clicked");
    });
  }

  update(evt) {
    //console.log("update evt = ", evt);
    if (!circleClicked) {
      this.x += CIRCLE_SPEED;
      if (this.x > canvas.width) {
        this.x = -this.graphics.command.radius * 0.5;
      }
    }
  }
}
