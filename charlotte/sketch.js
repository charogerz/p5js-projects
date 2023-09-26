function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  let x = windowWidth/2;
  let y = windowHeight/2;
  
  let h = hour();
  let m = minute();
  let s = second();
  
  //changes with am and pm
  if(h >= 0 && h < 12) {
    background(255, 255, 209); //light yellow
  } else {
    background(138, 148, 181); //blueish gray
  }
  
  let secAngle = map(s,0,60,0,360);
  let minAngle = map(m,0,60,0,360);
  let hAngle = map(h % 12,0,12,0,360);
  
  //hour square
  push();
  translate(x,y);
  rotate(hAngle);
  fill(43, 6, 138); //dark blue
  rect(0,0,400,400);
  ellipse(0,-325,10,10);
  pop();
  
  //minute square
  push();
  translate(x,y);
  rotate(minAngle);
  fill(51, 0, 255); //blue
  rect(0,0,300,300);
  ellipse(0,-225,10,10);
  pop();
  
  //second square
  push();
  translate(x,y);
  rotate(secAngle);
  fill(43, 230, 255); //light blue
  rect(0,0,200,200);
  ellipse(0,-125,10,10);
  pop();
}