
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas (400,400)

  monkey = createSprite(120,300,20,20);
  monkey.addAnimation("monkey run", monkey_running)
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -6
      ground.x = ground.width/2;
    console.log(ground.x)
  
  score = 0
  
  obstacleGroup = new Group();
  bananaGroup = new Group();

}


function draw() {
background("green")
  
  if(keyWentDown("space") && monkey.y >= 100) {
    monkey.velocityY = -15
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.scale = 0.15
 monkey.collide(ground);
  var survivalTime = 0
  
  stroke("white")
  textSize(13)
  fill("white")
  text("Score :" + score,300,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :" + survivalTime,100,50)
  
  banana();
  obstacles();
  
  drawSprites();
}

function banana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
     banana.y = Math.round(random(120,200));
    banana.velocityX = -5
    banana.addImage("bananas",bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 200
    bananaGroup.add(banana)
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,320,20,20);
    obstacle.velocityX = -4
    obstacle.addImage("obstacles",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 300
    obstacleGroup.add(obstacle)
    
  }
}


