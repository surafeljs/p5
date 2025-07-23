let API;
let API_key = "e1072183e41f0151cbf09379697c660d";
let response;
let city_name = "Addis Ababa";
let country_code = "ETH";
function preload() {
  API = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&appid=${API_key}`;
}

function setup() {
  createCanvas(500, 400);

  weather();
}
async function weather(params) {
  try {
    let res = await fetch(API);
    let data = await res.json();
    response = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
function draw() {
  background(220);
  if (response) {
    textSize(16);
    fill(0);
    text(`Weather: ${response.weather[0].main}`, 10, 30);
  } else {
    text("Loading weather data...", 10, 30);
  }
}
