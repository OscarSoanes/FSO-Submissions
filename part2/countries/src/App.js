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
          <p key={country.name.common}>{country.name.common}</p>
        ))
      )}

      {countries.length === 1 && (
        <CountryDetail country={countries[0]}/>
      )}
    </div>
  );
}

export default App;
