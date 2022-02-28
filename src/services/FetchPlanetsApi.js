const PLANETS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetsAPI() {
  const response = await fetch(PLANETS_API_URL);
  const data = await response.json();
  return data;
}

export default fetchPlanetsAPI;
