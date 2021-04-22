import React, { useState } from "react";

const Country = ({ country }) => {
  //have to initialize state of each country as false
  //setting state of each country allows display to be rendered every
  //time the button is clicked and not affect any of the other countries rendered

  const [countryState, setVisible] = useState(false);

  country.show = countryState;

  const toggleCountry = () => {
    setVisible(!countryState);
    country.show = countryState;
    console.log(country);
  };

  return (
    <div>
      <p>
        {country.name} <button onClick={() => toggleCountry()}> Show </button>
      </p>

      <div>
        {country.show === true && (
          <div>
            <p> Population: {country.population}</p>
            <p> Capital: {country.capital}</p>
            <p> Region: {country.region}</p>

            <strong>Languages spoken:</strong>
            {country.languages.map((language) => (
              <li> {language.name} </li>
            ))}

            <img
              alt={`The flag of ${country.name}`}
              style={{ width: 300 }}
              src={country.flag}
            ></img>
          </div>
        )}
        <hr></hr>
      </div>
    </div>
  );
};

export default Country;
