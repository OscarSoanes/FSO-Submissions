import axios from 'axios';

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/"

const getAllByFilter = (query) => {
  const request = axios.get(baseUrl + "/api/all");
  const data = request.then(response => {
    return response.data
  });

  return data.then(countries => {
    return countries.filter(country => country.name.common.includes(query))
  });
};

export default { getAllByFilter }