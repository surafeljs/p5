let audios;
let slider;
let a;
let b;
function preload(params) {
  audios = createAudio("ሮፍናን - ሦሥት III ROPHNAN - SOST.mp4");
  slider = createSlider(0, audios.duration(), 0, 0.01);
}
function setup() {
  createCanvas(500, 400);
  background(200);
}

function draw(params) {
  audios.showControls();

  if (slider) {
    if (abs(audios.time() - slider.value()) > 0.05) {
      audios.time(slider.value());
    }

    slider.value(audios.time());
  }
  a = audios.time();
  b = audios.time();

  console.log(floor(a / 60), floor(b % 60));
}
