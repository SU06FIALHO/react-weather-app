import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props) {
const codeMapping = {
  "01d": "CLEAR_DAY",
  "02d": "PARTLY_CLOUDY_DAY",
  "03d": "CLOUDY",
  "04d": "CLOUDY",
  "09d": "RAIN_DRIZZLE",
  "10d": "RAIN_DRIZZLE",
  "11d": "THUNDERSTORM",
  "13d": "SNOW",
  "50d": "FOG",
  "01n": "CLEAR_NIGHT",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03n": "CLOUDY",
  "04n": "CLOUDY",
  "09n": "RAIN_DRIZZLE",
  "10n": "RAIN_DRIZZLE",
  "11n": "THUNDERSTORM",
  "13n": "SNOW",
  "50n": "FOG",
};
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={52}
      animate={true}
    />
  );
} 
