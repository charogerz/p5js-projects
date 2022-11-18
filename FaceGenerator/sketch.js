//global vars
let a = 0;
let b = 0;
let c1,c2;
let amt = 0;
let y = 50;
let z = 150;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(25);
  
  c1 = color(255,255,255);
  c2 = color(random(255),random(255),random(255));
  background(c1);
}

function draw() {
  amt = amt + 0.1;
  background(lerpColor(c1,c2,amt));
  if(amt > 1){
    c1 = c2;
    amt = 0;
    c2 = color(random(255),random(255),random(255));
  }
  
  strokeWeight(2);
  
  push(); 
  ellipse(width/2,height/2,250,250);
  ellipse(150,175,80,80);
  ellipse(250,175,80,80);
  pop();
  
  push();
  fill(0);
  a = mouseX/10;
  b = mouseY/10;
  ellipse(150,175,a,b);
  ellipse(250,175,a+20,b+20);
  pop();
  
  push();
  noFill();
  arc(190,250,90,60,30,180);
  pop();
  
  push();
  noFill();
  arc(175,257,45,90,y,z);
  pop();
  
  textSize(20);
  textFont('Courier New');
  textStyle(ITALIC);
  text('click anywhere, man...',80,365);
}

function mousePressed() {
  if(y === 50){
    y = 150;
  } else {
    y = 50;
  }
}