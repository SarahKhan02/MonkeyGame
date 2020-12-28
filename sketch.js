var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score
//var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //createCanvas(600,500);
  var survivalTime=0;
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x)
  
//banana = createSprite(220,190,20,20);
//banana.addAnimation("floating",bananaImage);
//banana.scale = 0.1
  
  score = 0;
  bananaGroup = new Group();
 obstacleGroup = new Group();
  
}

function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  bananaGp();
  obstacleGp();
  
  drawSprites();
}

function bananaGp(){
  if(World.frameCount % 80 === 0){
  banana = createSprite(220,190,20,20);
  banana.addAnimation("floating",bananaImage);
  banana.scale = 0.1
    
  position = Math.round(random(1,2));
  
  
    
  banana.y = Math.round(random(120,200));
  banana.velocityX = -5;
  banana.setLifetime = 100;
  bananaGroup.add(banana);
}
}

function obstacleGp(){
if(World.frameCount % 300 === 0) {
  var obstacle = createSprite(800,320,10,40);
 // obstacle.addAnimation("stone",obstacleImage);
  obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
  
  obstacle.setLifetime = 100;
}
}


