var Bullet,speed,weight
var Wall,thickness




function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  Bullet=createSprite(100,100,20,20)
  Bullet.shapeColor='white'
  thickness = random(23,88);
  Wall = createSprite(800,200,thickness,height/2)
  Wall.shapeColor = 'pink'
  speed = random(233,321);
  weight = random(30,52);
  Bullet.velocityX=speed;
}

function draw() {
  background(0);  
  drawSprites();
  
if(hasCollided(Bullet,Wall)){
  Bullet.velocityX = 0;
  var Damage = 0.5 * speed * speed * speed /(thickness*thickness*thickness)


if(Damage >10){
  Wall.shapeColor = 'red'
}
else if(Damage <10){
  Wall.shapeColor = 'green'
}
}
}
function hasCollided (lBullet,lWall){
  BulletRightEdge = lBullet.x +lBullet.width;
  WallLeftEdge =lWall.x
  if(BulletRightEdge>=WallLeftEdge){
    return true
}else {
return false;
}
}