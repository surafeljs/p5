let w;
let h;
let r;
let g;
let b;

function setup() {
  createCanvas(640, 360);
  background(0);
}

function draw() {
  rectMode("center");
  noStroke();

  w = floor(random(width));
  h = floor(random(height));
  r = floor(random(0, 255));
  g = floor(random(0, 255));
  b = floor(random(0, 255));
  fill(r, g, b);
  circle(w, h, 15);
}
// function mousePressed() {
//   background(mouseX, mouseY, 0);
// }
