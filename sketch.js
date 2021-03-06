var s;
var scl=10;
var food;

function setup() {
createCanvas(600,600);   
s = new snake();
    frameRate(10);
    Picklocation();
}

function Picklocation()
{
    cols=floor(width/scl);
    rows=floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function draw() 
{
    background(0);
    s.death();
    s.update();
    s.show();
    if(s.eat(food))
    Picklocation();
    
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
}

function keyPressed()
{
if (keyCode === UP_ARROW){
        s.dir(0,-1);
    }
else if (keyCode === DOWN_ARROW){
        s.dir(0,1);
    }
else if (keyCode === LEFT_ARROW){
        s.dir(-1,0);
    }
else if (keyCode === RIGHT_ARROW){
        s.dir(1,0);
    }}