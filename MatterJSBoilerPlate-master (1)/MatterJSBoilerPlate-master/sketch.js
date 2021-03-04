
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 body1.createSprites = 100, 20, 100, 20;
 body2.createSprites = 100, 20, 100, 20;
 body3.createSprites = 100, 20, 100, 20;
 body4.createSprites = 100, 20, 100, 20;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



