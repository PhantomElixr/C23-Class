const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground,ball,ball2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;



  ground = new Ground(width/2,380,400,10);
  ball = new Box(width/2,200,50,50);
  ball2 = new Box(175,50,50,50);
  

}

function draw() {
  background('gray');  
  Engine.update(engine);


  ground.display();
  ball.display();
  ball2.display();
}