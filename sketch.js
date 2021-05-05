const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getTime();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){

    }

    Engine.update(engine);

    // write code to display time in correct format here


}

    async function getTime(){
        var response=fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
        var responseJSON=await response.json();
        var datetime= responseJSON.datetime
        var hour=datetime.slice(11,13);
        if(hour>=6&&hour<=19){
            bg="sprites/bg1.png"
        }
        else{
    bg="sprites/bg2.png"
        }
        backgroundImg=loadImage(bg);
    }
