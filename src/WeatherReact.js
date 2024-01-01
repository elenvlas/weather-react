// import React from "react";
// import axios from "axios";

// export default function WeatherReact() {
//   return 
//   function formatDate(date) {
//   let hours = date.getHours();
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }
//   let minutes = date.getMinutes();
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }

//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];
//   let day = days[date.getDay()];

//   return `${day} ${hours}:${minutes}`;
// }

// let currentData = document.querySelector("#current-data");
// let currentTime = new Date();
// currentData.innerHTML = formatDate(currentTime);

// // Week 5
// function displayWeatherCondition(response) {
//   console.log(response.data);
//   document.querySelector("#found-city").innerHTML = response.data.name;
//   document.querySelector("#current-temperature").innerHTML = Math.round(
//     response.data.main.temp
//   );
//   document.querySelector("#humidity span").innerHTML =
//     response.data.main.humidity;
//   document.querySelector("#wind span").innerHTML = Math.round(
//     response.data.wind.speed
//   );
//   document.querySelector("#description").innerHTML =
//     response.data.weather[0].description;
// }

// function showFoundCity(event) {
//   event.preventDefault();
//   let inputCity = document.querySelector("#input-city");
//   let apiKey = "392fecb7049a8a39ff68de93bcb7e6a7";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(displayWeatherCondition);
// }

// function getCurrentPosition() {
//   navigator.geolocation.getCurrentPosition((position) => {
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     console.log(`Current latitude is ${lat}`);
//     console.log(`Current longitude is ${lon}`);
//     let apiKey = "392fecb7049a8a39ff68de93bcb7e6a7";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//     axios.get(apiUrl).then(displayWeatherCondition);
//   });
// }

// let buttonSearch = document.querySelector("#button-search");
// buttonSearch.addEventListener("click", showFoundCity);

// let buttonCurrent = document.querySelector("#button-current");
// buttonCurrent.addEventListener("click", getCurrentPosition);


}
