var maze, mazeIMG;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
var wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31;

var player, playerIMG;
var end, endIMG;

var gameState = 0;


function preload(){
  mazeIMG = loadImage("maze.png");
  endIMG = loadImage("Trophy.png");
  playerIMG = loadAnimation("Bird01.png", "Bird02.png", "Bird03.png", "Bird04.png", "Bird05.png", "Bird06.png", "Bird07.png", "Bird08.png", "Bird09.png");
}

function setup(){
  canvas = createCanvas(500,500);

  maze = createSprite(600,350,20,20);
  maze.addImage("img",mazeIMG);
 
  //border
  wall1 = createSprite(65,350,25,550);
  wall2 = createSprite(1145,350,25,550);
  wall3 = createSprite(650,80,1000,25);
  wall4 = createSprite(550,620,1000,25);

  //horizontal
  wall5 = createSprite(120,415,120,25);
  wall6 = createSprite(225,195,120,25);
  wall7 = createSprite(285, 510,230,25);
  wall8 = createSprite(340,305,350,25);
  wall9 = createSprite(440,405,130,25);
  wall10 = createSprite(555,190,120,25);
  wall11 = createSprite(660,305,130,25);
  wall12 = createSprite(1080,305,130,25);
  wall13 = createSprite(930,195,250,25);
  wall14 = createSprite(820,415,245,25);
  wall15 = createSprite(1035,520,220,25);
  wall16 = createSprite(715,510,250,25);

  //veritical
  wall17 = createSprite(175,250,25,140);
  wall18 = createSprite(275,360,25,100);
  wall19 = createSprite(495,360,25,100);
  wall20 = createSprite(390,460,25,100);
  wall21 = createSprite(605,460,25,100);
  wall22 = createSprite(495,560,25,100);
  wall23 = createSprite(715,560,25,100);
  wall24 = createSprite(820,470,25,100);
  wall25 = createSprite(605,250,25,100);
  wall26 = createSprite(710,365,25,100);
  wall27 = createSprite(1035,365,25,100);
  wall28 = createSprite(925,305,25,200);
  wall29 = createSprite(390,190,25,210);
  wall30 = createSprite(710,140,25,100);
  wall31 = createSprite(820,255,25,100);

  end = createSprite(1100,750,50,50);
  end.addImage("tr", endIMG);
  player = createSprite(50,50,20,20);
  player.addAnimation("animations",playerIMG);
  player.debug = true;
  player.setCollider("circle", 10,5,20);
  

}


function draw(){
  background("black");

  fill("white");
  textSize(50);
  text("MOVE THROUGH THE MAZE TO GET TO THE EXIT", 20,-10);

  camera.position.x = player.x;
  camera.position.y = player.y;

  // text("x : " + mouseX, 20,20);
  // text("y : " + mouseY, 20, 40);

  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);
  player.bounceOff(wall10);
  player.bounceOff(wall11);
  player.bounceOff(wall12);
  player.bounceOff(wall13);
  player.bounceOff(wall14);
  player.bounceOff(wall15);
  player.bounceOff(wall16);
  player.bounceOff(wall17);
  player.bounceOff(wall18);
  player.bounceOff(wall19);
  player.bounceOff(wall20);
  player.bounceOff(wall21);
  player.bounceOff(wall22);
  player.bounceOff(wall23);
  player.bounceOff(wall24);
  player.bounceOff(wall25);
  player.bounceOff(wall26);
  player.bounceOff(wall27);
  player.bounceOff(wall28);
  player.bounceOff(wall29);
  player.bounceOff(wall30);
  player.bounceOff(wall31);

  if(gameState === 0){

    if(keyDown(UP_ARROW)){
      player.y = player.y - 5;
    }
    if(keyDown(DOWN_ARROW)){
      player.y = player.y + 5;
    }
    if(keyDown(LEFT_ARROW)){
      player.x = player.x - 5;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x + 5;
    }

    if(player.isTouching(end)){
      gameState = 1;
      
    }
  }

  if(gameState === 1){

    canvas = createCanvas(displayWidth, displayHeight);
    background("pink");
    textSize(50);
    fill("white");
    text("YAY YOU WIN!! :D ", width/2, height/2);
    
    player.x = width/2;
    player.y = height/2;

  }
  


  drawSprites();
}
