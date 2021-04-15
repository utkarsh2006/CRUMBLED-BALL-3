
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
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
function mouseDragged(){
	if(gameState=="launched"){
		Matter.body.setPosition(paper.body,{x:mouseX,y:mouseY});
	}
}

function mouseRleased(){
	Launcher.fly();
	gameState = "launched";
}

