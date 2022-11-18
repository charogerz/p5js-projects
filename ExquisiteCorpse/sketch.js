//////////////////////////////////////
//Name: Charlotte Rogers
//Date: 10/02/2022
//Course: Critical Computation
//Lab Instructor: Regina Flores
//Partners' Names: Arianna & July
//////////////////////////////////////

//Global Vars
let x = 150;
let y = 150;
let c;
let img;

function preload () {
  img = loadImage('assets/ExqCorBod.png');
}

function setup() {
  createCanvas(400,600);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  
  head(x,y);
  body(x,y);
  legs(x,y);
}

function head(x,y) {
  //base
  push();
  fill(200);
  rect(x-20,y-100,x,y);
  pop();
  rect(x-10,y-90,x-20,y-20);
  
  //mouth
  push();
  fill(200);
  rect(x+15,y-15,x-70,y-110);
  pop();
  rect(x+20,y-11,x-80,y-118);
  
  //antennas
  line(x+50,y-100,x,y-135);
  line(x+50,y-100,x*1.5,y-135);
  
  //left eye
  rect(x+5,y-75,x-115,y-112);
  push();
  fill(0);
  rect(x+15,y-68,x-125,y-119);
  pop();
  push();
  fill(255,0,0);
  rect(x+20,y-60,x-130,y-127);
  pop();
  
  //right eye
  rect(x+70,y-75,x-115,y-112);
  push();
  fill(0);
  rect(x+70,y-68,x-125,y-119);
  pop();
  push();
  fill(255,0,0);
  rect(x+70,y-60,x-130,y-127);
  pop();
}

function body(x,y) {
  image(img,55,200,300,210);
}

function legs(x,y) {
  push();
  noStroke();
  c = color(247,158,197);
  fill(c);
  rect(x+45,y*2.73,x/7,y/4);
  rect(x-70,y*2.9,x*1.7,y,x-110,y-110)
  pop();
  push();
  noStroke();
  rect(x+38,y*3.1,x/4.2,y,x-148,y-148);
  rect(x-35,y*3.1,x/4.2,y,x-135,y-148);
  rect(x+110,y*3.1,x/4.2,y,x-148,y-135);
  rect(x,y*3.45,x/3,y,x-148,y-148);
  rect(x/2,y*3.7,x/3,y,x-148,y-148);
  rect(x+70,y*3.55,x/3,y,x-148,y-148);
  rect(x*1.9,y*3.7,x/3,y,x-148,y-148);
  pop();
  
  //feet (?)
  push();
  noStroke();
  c = color('green');
  fill(c);
  arc(x+20,y*3.45,x-113,y-110,0,180,CHORD);
  arc(x-52,y*3.68,x-113,y-110,0,180,CHORD);
  arc(x*1.61,y*3.55,x-113,y-110,0,180,CHORD);
  arc(x*2.1,y*3.7,x-113,y-110,0,180,CHORD);
  pop();
}