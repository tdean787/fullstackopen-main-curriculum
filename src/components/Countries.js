import React, { useState } from "react";
import Country from "../components/Country";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const findCountries = (event) => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${event.target.value}`)
      .then((response) => setCountries(response.data))
      .then(console.log(countries));
  };

  let display;
  if (countries.length > 10) {
    display = "too many countries";
  } else if (countries.length === 1) {
    display = (
      <div>
        {" "}
        {countries.map((country) => (
          <div>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>

            <strong>Languages spoken:</strong>
            {country.languages.map((language) => (
              <li> {language.name} </li>
            ))}

            <p>{country.name}</p>
            <img style={{ width: 300 }} src={country.flag}></img>
          </div>
        ))}
      </div>
    );
  } else if (countries.length < 10 || countries.length > 0) {
    display = (
      <div>
        {" "}
        {countries.map((country) => (
          <div>
            <Country country={country} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      Find countries <input onChange={findCountries} />
      <p>{display}</p>
      <div></div>
    </div>
  );
};

export default Countries;
