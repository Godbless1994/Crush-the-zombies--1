const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rope,bridge;
var stones=[];
var base1,base2;
var joint;
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(0,height-10,width*2,20);
   bridge = new Bridge(15,{x: width/2 -400, y: height/2});
   //jointPoint = new Base(width-600,height/2+10,40,20);

   base1=new Base(300,height/2+50,600,100);
   base2=new Base(width-200,height/2+50,400,100);

   Matter.Composite.add(bridge.body,base2);
   joint=new Link(bridge,base2);

  for(var i = 0; i<=8; i++){
    var x = random(width / 2 - 200, width / 2+ 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
   stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
 ground.show();
bridge.show();
base1.show();
base2.show();

for(var stone of stones){
  stone.show();
}
}
