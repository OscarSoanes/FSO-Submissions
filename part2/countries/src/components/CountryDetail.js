import React from 'react'

export default function CountryDetail({country}) {
  console.log(country);
  const languages = () => {
    const allLanguages = [];
    for (const language in country.languages) {
      allLanguages.push(country.languages[language]);
    }

    return allLanguages;
  }
  
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      <h2>Languages:</h2>
      <ul>
        {languages().map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img src={`${country.flags.png}`} alt={`${country.name.common}'s flag`}/>
    </>
  )
}
