var tomAnimation,tom;
var bg;


function preload(){
  bg= loadImage("image/map.png");
  tomAnimation = loadAnimation("image/tom/1.png","image/tom/2.png","image/tom/3.png","image/tom/4.png");

}
function setup(){
canvas = createCanvas(windowWidth,windowHeight);


tom=createSprite(600,600,5,5);
tom.scale= 0.025;
tom.addAnimation("tom",tomAnimation);

}
function keyPressed(){
  if (keyCode === 87){
    tom.position.y= tom.position.y-10 ;
  }
  }

function draw(){
  background(bg);

 
drawSprites();
}