const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f9f5bfce32msh2e8a7e9115d9782p1bcaacjsn08118e2530b3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

let searchcity = document.querySelector("#searchCity");
let search = document.querySelector("#searchimg").addEventListener("click",function(){
    checkWeather(searchcity.value)
    searchcity.value = ""
});

console.log(search);
async function checkWeather(city) {
  try {
    const response = await fetch(url + city, options);
    const result = await response.json();
    document.querySelector("#cityTemp").innerHTML = result.temp+"°c"
    document.querySelector("#cityName").innerHTML = city
    document.querySelector("#Humidity").innerHTML = result.humidity+"%"
    document.querySelector("#wind_speed").innerHTML = result.wind_speed+" km/h"
    document.querySelector("#Cloud_pct").innerHTML = result.cloud_pct
    document.querySelector("#Feels_like").innerHTML = result.feels_like
    document.querySelector("#Min_temp").innerHTML = result.min_temp
    document.querySelector("#Max_temp").innerHTML = result.max_temp
    document.querySelector("#Wind_degrees").innerHTML = result.wind_degrees
  } catch (error) {
    console.error(error);
  }
}
checkWeather("delhi")


