
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, paper1;


function setup() {
	 createCanvas(1200,700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1= new Paper(100,325,60,60)

	ground= new Ground(200,690,2000,10);

	dustbin1=new Dustbin(900, 670,180,20);
	dustbin2=new Dustbin(800,630,20,100);
	dustbin3=new Dustbin(1000,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
  ground.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

