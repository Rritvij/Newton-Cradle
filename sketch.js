
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof ;
var bob,bob2,bob3,bob4,bob5;
var chain1, chain2, chain3, chain4, chain5;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);
bobdiameter=40;
    startbobpositionX=width/2;
	startbobpositionY=height/4+500;
	bob= new Bob (startbobpositionX-bobdiameter*2,startbobpositionY,bobdiameter);
	bob2= new Bob(startbobpositionX-bobdiameter,startbobpositionY,bobdiameter);
	bob3= new Bob(startbobpositionX,startbobpositionY,bobdiameter);
	bob4= new Bob(startbobpositionX+bobdiameter,startbobpositionY,bobdiameter);
	bob5= new Bob(startbobpositionX+bobdiameter*2,startbobpositionY,bobdiameter);


	chain1=new Chain(bob.body,roof.body,-bobdiameter*2,0)
	chain2=new Chain(bob.body,roof.body,-bobdiameter*1,0)
	chain3=new Chain(bob.body,roof.body,0,0)
	chain4=new Chain(bob.body,roof.body,bobdiameter*1,0)
	chain5=new Chain(bob.body,roof.body,bobdiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();

 
}

function KeyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45})

}

}
function drawLine(constraint){

	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position
	roofBodyOffset=constraint.pointB

	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y

	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)




}



