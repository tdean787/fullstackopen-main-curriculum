import React, { useEffect, useState } from "react";
import Country from "../components/Country";
import SingleCountry from "../components/SingleCountry";
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
            <SingleCountry country={country} />
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
