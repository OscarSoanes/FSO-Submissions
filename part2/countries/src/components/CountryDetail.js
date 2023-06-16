import React, { useEffect, useState } from 'react'

import weatherService from '../services/weather';

export default function CountryDetail({country}) {
  const [languages, setLanguages] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log("Setting Weather");
    weatherService
      .getWeatherAtLocation(country.capital[0])
      .then(countriesWeather => {
        setWeather(countriesWeather);
        console.log(countriesWeather);
      })
  }, [country.capital])

  useEffect(() => {
    console.log("Updating Languages")

    const allLanguages = [];
    for (const language in country.languages) {
      allLanguages.push(country.languages[language]);
    }
    setLanguages(allLanguages);
  }, [country.languages])

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      <h2>Languages:</h2>
      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img src={`${country.flags.png}`} alt={`${country.name.common}'s flag`}/>
      
      {weather !== null && (
        <div>
          <h2>Weather: </h2>
          <p>Condition: {weather.weather[0].main}</p>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(1)}C</p>
  
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
        </div>
      )}
    </>
  )
}
