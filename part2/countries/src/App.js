import { useEffect, useState } from "react";
import countriesService from "./services/countries";

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

  return (
    <div className="App">
      <label>
        Find Countries:
        <input value={search} onChange={countryHandler}/>
      </label>
    </div>
  );
}

export default App;
