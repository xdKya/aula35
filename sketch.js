var bola;

function setup(){
  createCanvas(500,500);

  bola = createSprite(250,250,20,20);
  bola.shapeColor = "red";
}

function draw(){
  background("white");

  if(keyDown("right")){
    bola.x += 5;
  }
  if(keyDown("left")){
    bola.x -= 5;
  }
  if(keyDown("up")){
    bola.y -= 5;
  }
  if(keyDown("down")){
    bola.y += 5;
  }
  

  drawSprites();
  
}
