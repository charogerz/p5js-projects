///////////////////////////////////////////
//Name: Charlotte Rogers
//Date: 10/18/2022
//Course: Critical Computation
//Lab Instructor: Regina Flores
//Influenced by works on openprocessing.org
///////////////////////////////////////////

//global vars
let d1 = [];
let d2 = [];
let d3 = [];
let d4 = [];
let d5 = [];
let d6 = [];
let d7 = [];
let x; //initial x
let y; //initial y
let r = 30; //radius
let v = 1000; //vertices
let n; //noise
let t; //time
let cWidth = 10; //data circles width
let context;
let squiggle;
let smooth;
let squiggleSlider;
let smoothSlider;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  x = width / 2;
  y = height / 2;
  squiggleSlider = createSlider(0, 300, 100, 1);
  smoothSlider = createSlider(1, 500, 70, 1);
  t = 1;
  context = canvas.getContext("2d");

  d1 = [
    function () {
      circle(300, 80, cWidth);
    },
    function () {
      circle(300, 120, cWidth);
    },
    function () {
      circle(300, 150, cWidth);
    },
  ];
  d2 = [
    function () {
      circle(405, 218, cWidth);
    },
    function () {
      circle(427, 200, cWidth);
    },
    function () {
      circle(445, 186, cWidth);
    },
    function () {
      circle(462, 172, cWidth);
    },
    function () {
      circle(495, 147, cWidth);
    },
    function () {
      circle(510, 135, cWidth);
    },
    function () {
      circle(535, 115, cWidth);
    },
    function () {
      circle(555, 99, cWidth);
    },
  ];
  d3 = [
    function () {
      circle(420, 340, cWidth);
    },
    function () {
      circle(445, 348, cWidth);
    },
    function () {
      circle(495, 365, cWidth);
    },
    function () {
      circle(535, 378, cWidth);
    },
  ];
  d4 = [
    function () {
      circle(361, 470, cWidth);
    },
  ];
  d5 = [
    function () {
      circle(246, 450, cWidth);
    },
    function () {
      circle(236, 476, cWidth);
    },
    function () {
      circle(261, 410, cWidth);
    },
    function () {
      circle(226, 505, cWidth);
    },
    function () {
      circle(215, 535, cWidth);
    },
    function () {
      circle(206, 560, cWidth);
    },
    function () {
      circle(231, 490, cWidth);
    },
  ];
  d6 = [
    function () {
      circle(190, 337, cWidth);
    },
    function () {
      circle(172, 343, cWidth);
    },
    function () {
      circle(150, 350, cWidth);
    },
    function () {
      circle(125, 358, cWidth);
    },
    function () {
      circle(90, 370, cWidth);
    },
    function () {
      circle(75, 375, cWidth);
    },
  ];
  d7 = [
    function () {
      circle(173, 200, cWidth);
    },
    function () {
      circle(97, 140, cWidth);
    },
  ];
}

function draw() {
  squiggle = squiggleSlider.value();
  smooth = smoothSlider.value();
  background(255);
  t = t + 0.01;

  data();

  //shadow
  context.shadowColor = "black";
  context.shadowBlur = 150;

  //moving circles
  wobblyOuter();
  wobblyMiddle();
  wobblyInner();
}

function data() {
  if (mouseX > 260 && mouseX < 370 && mouseY < 300) {
    line(x, y, 300, 20);
    text("day 1", 285, 10);
    for (let i = 0; i < d1.length; i++) {
      d1[i]();
    }
  } else if (mouseX > 400 && mouseX < width && mouseY < 300) {
    line(x, y, 580, 80);
    text("day 2", 570, 70);
    for (let i = 0; i < d2.length; i++) {
      d2[i]();
    }
  } else if (mouseX > 390 && mouseX < width && mouseY > 300 && mouseY < 450) {
    line(x, y, 600, 400);
    text("day 3", 570, 384);
    for (let i = 0; i < d3.length; i++) {
      d3[i]();
    }
  } else if (mouseX > 300 && mouseX < 450 && mouseY > 300) {
    line(x, y, 400, 575);
    text("day 4", 390, 590);
    for (i = 0; i < d4.length; i++) {
      d4[i]();
    }
  } else if (mouseX < 300 && mouseX > 190 && mouseY > 300) {
    line(x, y, 200, 580);
    text("day 5", 180, 590);
    for (i = 0; i < d5.length; i++) {
      d5[i]();
    }
  } else if (mouseX < 300 && mouseX > 0 && mouseY > 300 && mouseY < 450) {
    line(x, y, 0, 400);
    text("day 6", 5, 384);
    for (i = 0; i < d6.length; i++) {
      d6[i]();
    }
  } else if (mouseX > 0 && mouseX < 250 && mouseY < 300) {
    line(x, y, 20, 80);
    text("day 7", 5, 70);
    for (i = 0; i < d7.length; i++) {
      d7[i]();
    }
  }
}

function wobblyOuter() {
  push();
  beginShape();
  for (let i = 0; i < v; i++) {
    n = noise(
      ((r + 30) * cos((i / v) * 360)) / smooth + t,
      ((r + 30) * sin((i / v) * 360)) / smooth + t
    );
    vertex(
      x + (r + squiggle * n) * cos((i / v) * 360),
      y + (r + squiggle * n) * sin((i / v) * 360)
    );
  }
  endShape(CLOSE);
  pop();
}

function wobblyMiddle() {
  push();
  beginShape();
  for (let i = 0; i < v; i++) {
    n = noise(
      ((r + 40) * cos((i / v) * 360)) / smooth + t,
      ((r + 40) * sin((i / v) * 360)) / smooth + t
    );
    vertex(
      x + (r / 3 + squiggle * n) * cos((i / v) * 360),
      y + (r / 3 + squiggle * n) * sin((i / v) * 360)
    );
  }
  endShape(CLOSE);
  pop();
}

function wobblyInner() {
  push();
  fill(200);
  beginShape();
  for (let i = 0; i < v; i++) {
    n = noise(
      ((r + 10) * cos((i / v) * 360)) / smooth + t,
      ((r + 10) * sin((i / v) * 360)) / smooth + t
    );
    vertex(
      x + (r / 4 + squiggle * n) * cos((i / v) * 360),
      y + (r / 4 + squiggle * n) * sin((i / v) * 360)
    );
  }
  endShape(CLOSE);
  pop();
}
