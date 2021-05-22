const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var line1;
var ground;
var rope;

var myengine,myworld;

var bow,bowimage;
var e;
var enemy = [];

var hint,hintmessage;
var image1,image2,image3;

var gamestate = "attach";

var gameon = 0;

var login;

var backgroundimage;

var playername;

var ex;

var zombie,backgroundsound;

function preload(){

  bowimage = loadImage("bow.png");
  loadImage("enemy1.png");

  image2 = loadImage("enemy1.png");
  image2 = loadImage("enemy2.png");
  image3 = loadImage("enemy3.png");
  backgroundimage = loadImage("background.jpg");
  zombiesound = loadSound("zombie.mp3");
  backgroundsound = loadSound("backgroundsound.mp3");


} 


function setup() {
  createCanvas(displayWidth,displayHeight);

  myengine = Engine.create();
  myworld = myengine.world;

  line1 = new Box(100,200,70);
  rope = new Bow(line1.body, {x:200, y:400});
  ground = new Ground(displayWidth/2,720,displayWidth,20);


  hint = createButton('Hint');
  hint.position(10  , 15);
  hint.class("customButton");

  //background = createSprite()

  //login = new Form(500,500);
  ex = new Box(100,20,80);

}


var angle = 0;

function draw() {

  background(backgroundimage);  
  Engine.update(myengine);
  frameRate(40);
  
  rope.display();
  line1.display();
  ground.display(); 

  hint.mousePressed(()=>{  
 
    hintmessage = createElement('p');
    hintmessage.class("h");
    hintmessage.html('Welcome to the archery game.Compleately userly friendly game.Try to make the best of your high scores and share it with as many as possible') ;
    hintmessage.position(200,20);
    });  
  

    ex.display();
    ex.body.density = 3;
    ex.body.position.y = mouseY;
 
    backgroundsound.play();


  //login.display();

  if(gameon === 1){
    clear();
    //game.play();
  }
 
 

// hint.doubleClick Event (() => {
  
// });

/*
hint.addEventListner('dblclick',() => {
  hint.disable=true
  console.log('double-Clicked event emitted');
})
*/

darts();



 for(var j =  0; j<enemy.length; j++ )
{
  enemy[j].display();
}

  
fill(0);



}













function darts(){
  if(frameCount%150 === 0){
    e = enemy.push(new Line1(Math.round(random(displayWidth/2,1200)),0,100,100));
    }
  
}

function mouseDragged() {
  
  if (gamestate === "attach") {
    Matter.Body.setPosition(line1.body,{x: mouseX, y: mouseY});
  }
}

function mouseReleased() {

  rope.fly();
  gamestate = "fly";
}
  
function keyPressed(){
  if(keyCode === 32){
    rope.reattach(line1.body);
    gamestate = "attach";
  }

 // if(keyCode === 65){
  //  Matter.Body.forceApply(ex.body,ex.body.poisitio,{x:40});
 // }
  
  if (keyCode === UP_ARROW) {
console.log("kjhkjhkj");
    Matter.Body.applyForce(ex.body,ex.body.position,{x:10,y:0});
  }
}