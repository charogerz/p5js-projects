//////////////////////////////////////
//Name: Charlotte Rogers
//Date: 10/11/2022
//Course: Critical Computation
//Lab Instructor: Regina Flores
//////////////////////////////////////

//Global Vars
let i = 0;
let j = 0;
let x = 60;
let y = 60;
let r;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(255);
  noStroke();
  
  squares();
  grayLines();
  whiteCircles();
  rCircle();
}

function whiteCircles() {
  for(i=60; i<width-15; i=i+60) {
    for(j=60; j<height-15; j=j+60) {
      fill(255);
      circle(i,j,15);
    }
  }
}

function grayLines() {
  // vertical gray lines
  for(i=55; i<width-10; i=i+60) {
    fill(180);
    rect(i,5,10,590);
  }
  
  // horizontal gray lines
  for(j=55; j<height-10; j=j+60) {
    fill(180);
    rect(5,j,590,10);
  }
}

function squares() {
  for(i=5; i<width; i=i+60) {
    for(j=5; j<height; j=j+60){
      fill(0);
      rect(i,j,50,50);
    }
  }
}

function rCircle() {
  r = color(255,0,0);
  fill(r);
  circle(x,y,13);
}

function mouseMoved() {
  x+=60;
  if(x>540) {
    x=60;
    y+=60;
  }
  if(y>540) {
    x=60;
    y=60;
  }
}