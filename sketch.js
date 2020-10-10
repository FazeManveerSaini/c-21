var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  

  speed = random(223,321)

  thickness = random(22,83)

  weight = random(30,52)

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);

  bullet.velocityX=speed;
}

function draw() {
  background(0); 
  
  
  if(hasCollided(bullet,wall)) {

    bullet.velocityX=0;
    var damage =0.5 * width * speed *speed/(thickness*thickness*thickness);
    
    if(damage>=10){
      bullet.shapeColor = color(255,0,0);
      console.log(damage);
    }
if (damage<10){
  console.log(damage);
  bullet.shapeColor = color(0,0,255);
}

  }
 
  drawSprites();
  }
  function hasCollided(lbullet,lwall)
  {
  bullet.RightEdge = lbullet.x + lbullet.width;
  wall.LeftEdge = lwall.x;
  if(bullet.RightEdge>= wall.LeftEdge)
  {
   return true
  }
  return false;
  }
 
