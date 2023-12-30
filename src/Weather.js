import React from "react";
import axios from 'axios';
import { Puff } from "react-loader-spinner";


export default function Weather(props) {
  function handlyResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`)
  }

  let apiKey = "392fecb7049a8a39ff68de93bcb7e6a7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handlyResponse);

  return (
    <Puff
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  );
  
}
