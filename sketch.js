const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var engine, world;
var score = 0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,380,800,10);
  ball = new Ball(50,350,50);
  hoop = new Hoop(600,150,20,20);
}

function draw() {
  background("white");
  Engine.update(engine);

  fill("black");
  text("Score : " + score,100,50);
  
  ground.display();
  ball.display();
  hoop.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-180});
  }
}