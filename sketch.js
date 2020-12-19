
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,tree;
var stone,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stoneShot;
function setup() {
	createCanvas(1361, 650);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=new Ground(width/2,height-10,width*2);

	tree=loadImage("tree.png");

    boy=loadImage("boy.png");
	stone=new Stone(200,480);
	
	mango1=new Mango(900,120);
	mango2=new Mango(970,160);
	mango3=new Mango(840,180);
	mango4=new Mango(770,220);
	mango5=new Mango(940,250);
	mango6=new Mango(840,250);
	mango7=new Mango(800,280);
	mango8=new Mango(970,280);
	mango9=new Mango(1050,300);
	mango10=new Mango(1030,240);

	

	stoneShot=new LaunchStone(stone.body,{x:195,y:500});



}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  image(tree,700,height-600,400,600);
  imageMode(CENTER);
  image(boy,280,570,280,300);
 
  console.log(stone.body.circleRadius);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneShot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  stoneShot.fly();
}

function detectCollision(stoneObj,mangoObj){
  var mangoObjPos=mangoObj.body.position;
  var stoneObjPos=stoneObj.body.position;
  var distance=dist(mangoObjPos.x,mangoObjPos.y,stoneObjPos.x,stoneObjPos.y);
  
  if(distance<=2*(stoneObj.body.circleRadius+mangoObj.body.circleRadius)){
    console.log(distance);
    Matter.Body.setStatic(mangoObj.body,false);
  }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:200,y:480});
    stoneShot.attach(stone.body);
  }
}
