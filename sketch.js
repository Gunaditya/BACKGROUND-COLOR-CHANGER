var box;

function setup() {
  createCanvas(400,400);
  //box = createSprite(200,200,30,30);

}

function draw() 
{
   background(30);
 
   if(keyDown(RIGHT_ARROW)){
    background("yellow");
  }

  if(keyDown(LEFT_ARROW)){
    background("red");
  }

  if(keyDown(UP_ARROW)){
    background("green");
  }

  if(keyDown(DOWN_ARROW)){
    background("blue");
  }
  drawSprites();
}




