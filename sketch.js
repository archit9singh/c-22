const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var obj1;
var ground,ball;



function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;


  var Goptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,350,400,10,Goptions);
  World.add(world,ground);

  var Boptions ={
    restitution : 0.5,
    density : 0.5
  }
  ball = Bodies.circle(200,200,30,Boptions);
  World.add(world,ball)


 
}

function draw() {
  background("lightblue");  

  Engine.update(engine);
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,400,10);
  fill("green")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  
  drawSprites();
} 
