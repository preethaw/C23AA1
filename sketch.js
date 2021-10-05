
var box1,box2;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,200,50,50, "red");
  box2 = new Box(200,200,50,150, "green");
}

function draw() 
{
  background(220);
  box1.display();
  box2.display();
}







