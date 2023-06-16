import { useEffect, useState } from "react";
import countriesService from "./services/countries";

function App() {
  const [search, setSearch] = useState("Uni");

   useEffect(() => {
    console.log("Searching countries", search);

    if (search) {
      countriesService
      .getAllByFilter(search)
      .then(returnedCountries => {
        console.log(returnedCountries);
      })
    }

  }, [search])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
