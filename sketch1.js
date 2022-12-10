
var character;
var bg,backgroundimg,invisibleGround;
var evil, evilimg
var tree

function preload(){
    characterimg= loadAnimation("./assets/goblin_01.png");
    backgroundimg=loadImage("./assets/xmas_2bg.png");
    evilimg=loadImage("./assets/bear_01.png");
    treeimg=loadImage("./assets/obs_tree.png")
}

function setup(){
createCanvas(windowWidth, windowHeight);
    
//Add background object
   bg = createSprite (windowWidth-300,windowHeight/2-30,windowWidth, windowHeight);
   bg.addAnimation("bg",backgroundimg);
    //bg.velocityX=1;
    // bg.velocityX = -(2 + 1)
    bg.velocityX = -1.5;

// Add vilan
    evil = createSprite(150,620,30,50);
    evil.addImage("evil",evilimg)
    evil.scale=0.35;
    

// Add character
    character = createSprite(500,620,30,50);
    character.addAnimation("character",characterimg);
    character.scale=0.9;


//Add invisible ground
//invisibleGround = createSprite(600,460,600,590);
    invisibleGround = createSprite(50,620,windowWidth,10);
    invisibleGround.visible = false;

    
}

function draw(){

    drawSprites(); 
    print(character.x)
    print(character.y)

//moving background
//if (bg.x > 400){
//    bg.x = 300;
//}
    if (bg.x <= 200){
        bg.x = windowWidth-300;
      }


//move character
    if(keyDown("space") && character.y>=100){
        character.velocityY=-7;
    }



// add gravity to character+ground
    character.velocityY = character.velocityY + 0.8
    character.collide(invisibleGround); 
    evil.collide(invisibleGround); 
     // esta linea de codigo se sustituye con los IFs de arriba debido a el bug que tiene la engine p5 con la funcion collide.   
    //Add tree
    obstacles();
    console.log(obstacles)   
 }

 function obstacles(){
    if (frameCount % 240 === 0){
        var obstacle = createSprite(windowWidth+100,windowHeight-300);
        // no posicion, velocidad
        obstacle.x = Math.round(random(windowWidth+100, windowWidth+150));
        obstacle.velocityX = - 2
        obstacle.addImage(treeimg);
        obstacle.scale = 0.2;
        // no es suficiente tiempo
        obstacle.lifetime = (windowWidth/2);
    }
}