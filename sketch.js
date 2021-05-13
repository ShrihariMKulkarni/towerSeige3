const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var flag;
var ball;
var ground1 , ground2;
var ground , chain;
var gameState = "steady";
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12 , box13 , box14;
var box15 , box16 , box17, box18, box19, box20, box21, box22, box23, box24, box25;
var bg , night , day , backgroundImg , boxes , score = 0;


function preload(){

	getTime();
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(windowWidth/2,windowHeight-35,windowWidth,20)
    World.add(world,ground);

	ground1 = new Ground(680,550,400,20);
	ground2 = new Ground(1250,400,300,20);

	ball = new Ball(300,300,40);

	box1 = new Box(560,520,40,40);
	box2 = new Box(600,520,40,40);
	box3 = new Box(640,520,40,40);
	box4 = new Box(680,520,40,40);
	box5 = new Box(720,520,40,40);
	box6 = new Box(760,520,40,40);
	box7 = new Box(800,520,40,40);

	box8 = new Box(600,480,40,40);
	box9 = new Box(640,480,40,40);
	box10 = new Box(680,480,40,40);
	box11 = new Box(720,480,40,40);
	box12 = new Box(760,480,40,40);

	box13 = new Box(640,440,40,40);
	box14 = new Box(680,440,40,40);
	box15 = new Box(720,440,40,40);

	box16 = new Box(680,400,40,40);

	box17 = new Box(1250,380,40,40);
	box18 = new Box(1290,380,40,40);
	box19 = new Box(1330,380,40,40);
	box20 = new Box(1210,380,40,40);
	box21 = new Box(1170,380,40,40);

	box22 = new Box(1290,340,40,40);
	box23 = new Box(1250,340,40,40);
	box24 = new Box(1210,340,40,40);

	box25 = new Box(1250,300,40,40);

	chain1 = new Chain(ball.body, {x:300 , y:300});

	boxes = [box1 , box2 , box3 , box4 , box5, box6 , box7 , box8 , box9, box10, box11, box12, box13, box14 , box15 , box16
		, box17 , box18 , box19 , box20 , box21 , box22 , box23 , box24 , box25];

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
    background(backgroundImg);

  fill("red");
  textSize(20)
  text("Press SPACE to take another chance " , windowWidth/2.9,200)

  
	//score = score +  1;
		//text("score : " + score, width/2 , 100)

  
  
  
ground.display();
ground1.display();
ground2.display();
ball.display();
chain1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();


drawSprite();
 
}
function mouseDragged(){
if(gameState==="steady"){


    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
}
    

function mouseReleased(){
    chain1.fly();
    gameState="launch"
}
function keyPressed(){  
    if(keyCode===32)
    chain1.attach(ball.body);
    gameState= "steady"
    Matter.Body.setPosition(ball.body, {x:300  , y: 300});
}

async function getTime(){

	var timing = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
	
	
	var timingJson = await timing.json();
	console.log(timingJson);
	
	var dt = timingJson.datetime;
	console.log(dt);
	
	var hrs = dt.slice(11,13)
	console.log(hrs);
	
	if(hrs<=6 && hrs>=18){
	
		bg="images/night.jpg"
	}else{
		bg="images/day.jpg"
	}
	
	backgroundImg = loadImage(bg);
	}