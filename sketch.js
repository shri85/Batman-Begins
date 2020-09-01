const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bruceUmbrella;
var maxDrops = 100;
function preload(){
    
}

function setup(){
createCanvas(400,400)
engine = Engine.create();
    world = engine.world;
    
    bruceUmbrella = new Umbrella(200,200);
    
}

function draw(){

    for(var i = 0; i<maxDrops; i++) {
        drops.push(new createDrop(random(0,400),random(0,400)));
    }

    bruceUmbrella.display();
    drops.display();
    drops.update();
    

    Engine.update(engine);
}   

