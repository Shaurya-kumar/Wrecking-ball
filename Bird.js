class Ball{
  constructor(x, y) {
      var options = {
          
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;
      this.image1 = loadImage("sprites/bird.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image1, 0, 0, this.width, this.height);
      pop();
    }
}