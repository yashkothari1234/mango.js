
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(630,650,20,200);
ground = new Ground(350,height,width,20);
mango1 = new Mango(700,590,2,2);
mango2= new Mango(720,560,2,2);
mango3 = new Mango(730,520,2,2);
mango4= new Mango(740,570,2,2);
boy = new Boy(100,650,200,200) ;
stone = new Stone(50,610,1,1);
launcher = new SlingShot(stone.body,{x:150, y:595});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  boy.display();
  stone.display();
  launcher.display();
detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
keypressed();
drawSprites();
  

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}


function detectcollision(lmango,lstone){
mangoPosition = lmango.body.position
stonePosition = lstone.body.position
var distance = dist(mangoPosition.x,mangoPosition.y,stonePosition.x,stonePosition.y);
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function keypressed(){
	if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:50,y:610});
launcher.attach(stone);
	}
}




