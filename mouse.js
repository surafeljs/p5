let img;
let incriment;
let a;
function preload(params) {
  img = loadImage("cat.jpg");
  incriment = 0;
  a = floor(random(0, 255));
}

function setup() {
  createCanvas(1240, 600);
  background(mouseY);
}
function draw(params) {
  fill(mouseX, mouseY, a);
  circle(mouseX, mouseY, 30);
}
function mousePressed(params) {
  background(0);
  fill(mouseX, mouseY, a);
}
