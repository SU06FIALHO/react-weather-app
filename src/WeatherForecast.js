import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
setLoaded(false);
  }, [props.coordinates]);
  

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
  }

  if (loaded) {
   
    return (
      <div className="WeatherForecast">
        <div className="row">
         {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
  })}
          
        </div>
      </div>
    );
  } else {
    let apiKey = "74ba2ac4o95a095ca8b15001f53d3et4";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
