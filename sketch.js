const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];

var random1 = 0;
var raindrop1;
var r1;

function setup() 
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  r1 = new Raindrops();
  r1.body.velocity.y = 100;
  console.log(r1.body.velocity.y);

  for(var i = 0; i < 10; i = i+1)
  {
    raindrop1 = new Raindrops();
    //raindrop1.body.speed = random(50,100);
    raindrops.push(raindrop1);
  }

  
}

function draw()
{
  background("white");  
  Engine.update(engine);
  //console.log(raindrops);
  random1 = random(10,400);
  r1.display();

  for(var i = 0; i < 10; i=i+1)
  {
    raindrops[i].display();
    //console.log(raindrops[i].body.speed);

  }

  for (var i = 0; i < 10; i=i+1){
  
    if(raindrops[i].body.position.y > 400){
      raindrops[i].body.position.y = 0;
    }
    
  }

  drawSprites();
}