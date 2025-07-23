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
}
function draw(params) {
  //   fill(mouseX, mouseY, a);
  background(0);
  circle(mouseX + 50, mouseY, 30);
  circle(mouseX - 50, mouseY, 30);
}
// function mousePressed(params) {
//   background(0);
//   fill(mouseX, mouseY, a);
// }
