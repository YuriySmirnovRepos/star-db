export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
  
    async getResource(url) {
      const response = await fetch(`${this._apiBase}${url}`);
      const errorMessage = `Could not fetch ${url}, received ${response.status}`;
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      return response.json();
    }
  
    getAllPeople = async () => {
      const res = await this.getResource('/people/');
      return res.results;
    };
  
    getPerson = async (id) => {
      const res = await this.getResource(`/people/${id}/`);
      return res;
    };
  
    getAllPlanets = async () => {
      const res = await this.getResource('/planets/');
      return res.results;
    };
  
    getPlanet = async (id) => {
      const res = await this.getResource(`/planets/${id}/`);
      return res;
    };
  
    getAllStarships = async () => {
      const res = await this.getResource('/starships/');
      return res.results;
    };
  
    getStarship = async (id) => {
      const res = await this.getResource(`/starships/${id}/`);
      return res;
    };
  }