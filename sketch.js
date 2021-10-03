const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundObj = new Ground(450 , 590, 900, 20);
leftSide = new Ground(600, 530, 10, 100);
rightSide = new Ground(750, 530, 10, 100);

var ball_options = {
	isStatic: false,
	restitution: 0.2,
	friction: 0,
	density: 1.
 
 }

 ball = Bodies.circle(200, 0, 30, ball_options);
World.add(world, ball);
fill("grey");

rectMode(CENTER);
ellipseMode(RADIUS);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ellipse(ball.position.x, ball.position.y, 30);
  
  
groundObj.display();
leftSide.display();
rightSide.display();

Engine.update(engine);

  drawSprites();
 
}

function keyReleased () {

if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

}

}







