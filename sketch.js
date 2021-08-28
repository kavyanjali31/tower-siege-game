const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;

function preload(){

}
function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(700,600,425,25);
    box1=new Box(570,565,50,45)
    box2=new Box(620,565,50,45)
    box3=new Box(670,565,50,45)
    box4=new Box(720,565,50,45)
    box5=new Box(770,565,50,45)
    box6=new Box(820,565,50,45)
    box7=new Box(588,520,50,45)
    box8=new Box(638,520,50,45)
    box9=new Box(688,520,50,45)
    box10=new Box(738,520,50,45)
    box11=new Box(788,520,50,45)
    box13=new Box(608,472,50,45)
    box14=new Box(658,475,50,45)
    box15=new Box(705,475,50,45)
    box16=new Box(755,475,50,45)
    box17=new Box(630,430,50,45)
    box18=new Box(680,430,50,45)
    box19=new Box(730,430,50,45)
    box20=new Box(655,385,50,45)
    box21=new Box(710,385,54,45)
    box22=new Box(682,340,54,45)
    polygon=new Polygon(200,200,1);
    slingshot = new Slingshot(polygon.body,{x:200, y:400});
    

    
    
    

    

}
function draw(){
    background(0);
    Engine.update(engine); 
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
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
    polygon.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
