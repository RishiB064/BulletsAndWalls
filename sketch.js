
var wall,thickness;
var bullet,speed,weight;

function setup() 
{
  createCanvas(800,400);
  speed=random(223,321);
  weight =random(30,52);
  thickness =random(22,83);
  wall = createSprite(1200, 200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet =createSprite(50,200,50,70);  
}


function hasCollided(lbullet, lwall)
{
  lbulletRightEdge =lbullet.x +lbullet.width;
  lwallLeftEdge =lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
  
  
}


function draw() 
{
  background(255,255,255);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX =0;
    var damage =0.5 *weight *speed *speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor =color(225,0,0);

    }

    if(damage<10)
    {
      wall.shapeColor =color(0,225,0);

    }
  }
  drawSprites();
  hasCollided(bullet,wall);
  
  }
  
 


