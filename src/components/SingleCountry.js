import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState();
  const weatherKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${country.capital}&aqi=no`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(weather);
      });
  }, weather);

  return (
    <div>
      {" "}
      <div>
        {weather != undefined && (
          <div>
            <h3>Current Weather in {country.capital}</h3>
            <p>Current Temp (Fahrenheit) {weather.current.temp_f}</p>
            <p>Humidity: {weather.current.humidity}</p>
            <p>
              Weather condtion: {weather.current.condition.text}{" "}
              <img src={weather.current.condition.icon}></img>
            </p>
            <p>
              Wind: {weather.current.wind_mph} MPH - direction:{" "}
              {weather.current.wind_dir}{" "}
            </p>
          </div>
        )}

        <h3>{country.name}</h3>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>

        <strong>Languages spoken:</strong>
        {country.languages.map((language) => (
          <li> {language.name} </li>
        ))}

        <img style={{ width: 300 }} src={country.flag}></img>
      </div>
    </div>
  );
};

export default SingleCountry;
