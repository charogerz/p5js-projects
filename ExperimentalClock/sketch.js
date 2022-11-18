function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  let h = hour();

// changing background colors
  if(h==1 || h==2 || h==3 || h==4 || h==5 || h==6 || h==20 || h==21 || h==22 || h==23 || h==24) {
    background(0,59,113);
  }else if(h==7) {
    background(238,175,97);
  }else if(h==8 || h==9 || h==10 || h==11) {
    background(254,245,106);
  }else if(h==12 || h==13 || h==14 || h==15) {
    background(169,252,255);
  }else{
    background(100,154,217);
  }
  
// surface
  push();
  fill(186,140,99);
  rect(0,420,height,width);
  pop();
  
// shadow
  push();
  fill(120);
  noStroke();
  ellipse(253,450,500,40);
  pop();

// main triangle
  push();
  triangle(300,100,100,450,500,450);
  pop();
  
  strokeWeight(2);

// minute hand
  push();
  translate(width/2,height/2);
  rotate(180);
  let m = map(minute(),0,60,0,360);
  rotate(m);
  rect(-2,-2,1,200);
  rotate(-m);
  pop();

// breakfast
  if(h == 8) {
    push();
    noFill();
    triangle(100,450,200,275,300,450);
    pop();
    push();
    fill(255,254,235);
    arc(208,400,70,60,-100,115);
    arc(190,398,70,60,80,-65);
    pop();
    push();
    fill(246,238,0);
    ellipse(200,400,40,35);
    pop();
  }

// lunch
  if(h == 13) {
    push();
    noFill();
    triangle(300,100,400,275,200,275);
    pop();
    push();
    fill(206,141,7);
    arc(300,205,80,45,180,0,CHORD);
    rect(262,220,75,10,2,2);
    pop();
    push();
    fill(86,12,2);
    rect(262,210,75,10,2,2);
    pop();
    push();
    fill(50,199,4);
    quad(255,205,275,215,350,210,335,208);
    pop();
    push();
    fill(209,0,0);
    arc(300,205,75,10,0,180,CHORD)
    pop();
  }
  
// dinner
  if(h == 18) {
    push();
    noFill();
    triangle(300,450,500,450,400,275);
    pop();
    push();
    fill(239,246,251);
    arc(400,390,90,95,0,180,OPEN);
    pop();
    push();
    ellipse(400,390,90,15);
    pop();
    push();
    fill(229,152,36);
    ellipse(400,393,70,8);
    pop();
    push();
    noFill();
    arc(400,365,25,35,275,45);
    arc(395,360,25,35,105,230);
    arc(435,360,25,35,120,240);
    arc(362,365,25,35,275,45);
    pop();
  }
  
}