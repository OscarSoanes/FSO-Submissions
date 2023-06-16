import { useEffect, useState } from "react";
import countriesService from "./services/countries";
import CountryDetail from "./components/CountryDetail";
import Find from "./components/Find";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    console.log("Searching countries", search);

    if (search) {
      countriesService
      .getAllByFilter(search)
      .then(returnedCountries => {
        console.log(returnedCountries);
        setCountries(returnedCountries);
      })
    }

  }, [search])

  const countryHandler = (event) => {
    setSearch(event.target.value);
  }

  if (countries === null) {
    return (
      <div>
        <Find search={search} onChange={countryHandler}/>
      </div>
    );
  }

  return (
    <div className="App">
      <Find search={search} onChange={countryHandler}/>

      {countries.length > 9 && (
        <p>Too many matches, specify another filter.</p>
      )}

      {countries.length <= 9 && countries.length > 1 && (
        countries.map(country => (
          <div style={{display: "flex", gap: 8, alignItems: "center"}}>
            <p key={country.name.common}>{country.name.common}</p>
            <button onClick={() => setSearch(country.name.common)}>show</button>
          </div>
        ))
      )}

      {countries.length === 1 && (
        <CountryDetail country={countries[0]}/>
      )}

      {countries.length === 0 && (
        <p>No countries match, specify another filter.</p>
      )}
    </div>
  );
}

export default App;
