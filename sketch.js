const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
  var ball,ground;

function setup() {
  createCanvas(800,400);
  
   
  myEngine=Engine.create();
  myWorld=myEngine.world;
  
  ballOptions={
    restitution:1.5
  }
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(myWorld,ball);
  var groundOptions={
   isStatic:true   
  }
  ground=Bodies.rectangle(400,350,800,20,groundOptions);
  World.add(myWorld,ground);

//console.log(ball);
}

function draw() {
  background("skyblue");  
 Engine.update(myEngine);
 rectMode(CENTER);
 fill("orange");
 rect(ground.position.x,ground.position.y,800,20);
 ellipseMode(RADIUS);
 fill("pink");
 ellipse(ball.position.x,ball.position.y,20,20); 
}