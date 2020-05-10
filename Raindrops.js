class Raindrops
 {
  constructor()
  {
      var options =
      {
          restitution :0.8,
          density :1
      }
      this.x = random(10,400);
      this.y = random(0,10);
      this.body = Bodies.rectangle(this.x,this.y,10,20);
      this.body.speed = random(50,1000);
      this.width = 10;
      this.height = 20;

      World.add(world,this.body);
  }
  display()
  {
      var pos = this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x,pos.y,this.width,this.height);
  }
}