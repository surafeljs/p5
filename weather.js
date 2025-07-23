let API;
let API_key = "e1072183e41f0151cbf09379697c660d";
let weathers;
let city_name = "Addis Ababa";
let country_code = "ETH";
function preload() {
  API = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&appid=${API_key}`;
}

function setup() {
  createCanvas(600, 400);

  weather();
}
async function weather(params) {
  try {
    let res = await fetch(API);
    let data = await res.json();
    weathers = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
function draw() {
  background(255, 204, 0);
  if (weathers) {
    textSize(16);
    textAlign(CENTER, CENTER);

    text(`City: ${weathers.sys.country}`, width / 2, 30);

    text(`City: ${weathers.name}`, width / 2, 50);
    text(`Temp: ${(weathers.main.temp - 273.5).toFixed(1)} °C`, width / 2, 70);
    text(
      `Max Temp: ${(weathers.main.temp_max - 273.5).toFixed(1)} °C`,
      width / 2,
      90
    );
    text(
      `Min Temp: ${(weathers.main.temp_min - 273.5).toFixed(1)} °C`,
      width / 2,
      110
    );
    text(`Min Temp: ${weathers.weather[0].main} `, width / 2, 130);
  } else {
  }
}
