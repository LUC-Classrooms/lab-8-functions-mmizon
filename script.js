function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1);
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
 myShape(50, 50, .3)
 myShape(90, 90, .5)
  
}

function myShape(x, y, s) {
  // make this function more interesting

  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  
  fill(255, 165, 0)
  ellipse(10, -35, 30, 20) //dorsal fin 
  ellipse(-10, 32, 10, 20) //pelvic fin 
  triangle(25, 0, 60, -20, 60, 20) //tail
  ellipse(0, 0, 70, 60); // body // simple ellipse at the translated origin (0,0)
  ellipse (5, 0, 20, 10) //pectoral fin
  fill(0)
  ellipse(-20, -3, 5)
  strokeWeight(0) //grey part of tail
  fill(200) 
  triangle(50, 0, 60, -20, 60, 20)
  

  pop(); // dispose of the layer
}
