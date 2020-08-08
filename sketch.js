const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground2;

var block1,block2,block3,block4;
var block5,block6,block7;
var block8,block9;
var block10;

var block11,block12,block13;
var block14,block15;
var block16;

var engine, world;

var polygon;

var slingShot;

var score;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
	world = engine.world;

  block1 = new Block(410,440,50,80);
  block2 = new Block(465,440,50,80);
  block3 = new Block(355,440,50,80);
  block4 = new Block(300,440,50,80);

  block5 = new Block2(327,345,50,80);
  block6 = new Block2(382,345,50,80);
  block7 = new Block2(437,345,50,80);

  block8 = new Block3(352,270,50,80);
  block9 = new Block3(407,270,50,80);

  block10 = new Block4(379,190,50,80);
  
  block11 = new Block(800,295,50,80);
  block12 = new Block(745,295,50,80);
  block13 = new Block(690,295,50,80);

  block14 = new Block4(775,210,50,80);
  block15 = new Block3(745,110,50,80);

  block16 = new Block4(715,210,50,80);

  polygon = new Hexagon(200,100,50);

  ground = new Ground(380,500,300,10);
  ground2 = new Ground(750,350,200,10);
  ground3 = new Ground(500,600,1000,50);

  slingShot = new SlingShot(polygon.body,{x:100, y:150});
  score = 0;

  Engine.run(engine);
}

function draw() {
	Engine.update(engine);
  background(255);  

  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block1.score();

  block2.display();
  block2.score();

  block3.display();
  block3.score();

  block4.display();
  block4.score();

  block5.display();
  //block5.score();

  block6.display();
  //block6.score();

  block7.display();
  //block7.score();

  block8.display();
  //block8.score();

  block9.display();
  //block9.score();

  block10.display();
  //block10.score();

  block11.display();
  //block11.score();

  block12.display();
  //block12.score();

  block13.display();
  //block13.score();

  block14.display();
  //block14.score();

  block15.display();
  //block15.score();
  
  block16.display();
  //block16.score();

  polygon.display();
  slingShot.display();

  drawSprites();

  text("SCORE : " + score,750, 40);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}

async function getBackgroundColor(){
  var response = await fetch(background(255))
  var responseJson = await response.json();
  var hour = responseJson.datetime.slice(11,13)
  if(hour > 6 && hour < 14){
        bg(0)
    }else {
        bg(255)
    }
    backgroundImg = bg
} 
