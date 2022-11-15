var brickGroup , brick2Group , brick3Group
var brickImage , ballImage , paddleImage
var paddle
var topBoundairy , rightBoundairy , leftBoundairy , bottomBoundairy

function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  brickImage = loadImage("assets/brick.png")
  ballImage = loadImage("assets/ball.png")
  paddleImage = loadImage("assets/paddle.png")
}

function setup() {
  canvas = createCanvas(800, 600);

ball = createSprite(400,300,20,20)
ball.addImage("ball",ballImage)
ball.scale = 0.2

paddle = createSprite(400,500,20,20)
paddle.addImage("paddle",paddleImage)
paddle.scale = 0.5

leftBoundairy = createSprite(0 , 300 , 10 , 600)
rightBoundairy = createSprite(800 , 300 , 10 , 600)
topBoundairy = createSprite(400 , 0 , 800 , 10)
bottomBoundairy = createSprite(400 , 600 , 800 , 10)

leftBoundairy.visible = false
rightBoundairy.visible = false
topBoundairy.visible = false
bottomBoundairy.visible = false

brickGroup = new Group()
brick2Group = new Group()
brick3Group = new Group()

}
 function draw(){

  background(backgroundImage)

  paddle.x = mouseX
  /*if(keyDown(RIGHTARROW)){
    paddle.x = paddle.x + 5
  }*/

  if(keyDown ("space")){
    ball.velocityX = 3
    ball.velocityY = 4
  }

  ball.bounceOff (paddle)
  ball.bounceOff(leftBoundairy)
  ball.bounceOff(topBoundairy)
  ball.bounceOff(rightBoundairy)

  if(ball.isTouching(brickGroup)){
    brickGroup.destroyEach()
  }

  if(ball.isTouching(brick2Group)){
    brick2Group.destroyEach()
  }

  if(ball.isTouching(brick3Group)){
    brick3Group.destroyEach()
  }

  if(ball.isTouching(bottomBoundairy)){
    ball.x = 400;
    ball.y = 300;
    textSize(100);
    text("Game over !!!" , 300 , 250)
    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  Brick()
  Brick2()
  Brick3()
  drawSprites()
 }

 function Brick(){
  if(frameCount % 10 == 0){
    brick = createSprite(800,20,30,30)
    brick.addImage("brick",brickImage)
    brick.velocityX = -4
    brick.scale = 0.15
    brickGroup.add(brick)
  }
 
}
 function Brick2(){
  if(frameCount % 10 == 0){
    brick = createSprite(800,60,30,30)
    brick.addImage("brick",brickImage)
    brick.velocityX = -4
    brick.scale = 0.15
    brick2Group.add(brick)
  }
 }

 function Brick3(){
  if(frameCount % 10 == 0){
    brick = createSprite(800,100,30,30)
    brick.addImage("brick",brickImage)
    brick.velocityX = -4
    brick.scale = 0.15
    brick3Group.add(brick)
  }
 }
