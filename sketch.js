
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1=new dustbin(1200,600,20,100)
	dustbin2=new dustbin(1400,600,20,100)
	dustbin3=new dustbin(1300,650,190,20)
	paper1=new paper(50,600,75)
	ground=new Ground(750,680,1500,15)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
 
  dustbin1.display()
  dustbin2.display() 
  dustbin3.display()
  
  ground.display()
  image(dustbinImg,1180,400,240,275)
  paper1.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-200})
	}
}


