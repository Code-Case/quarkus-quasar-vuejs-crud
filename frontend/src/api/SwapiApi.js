export default class SwapiApi {
  getMovies() {
    return this.$axios
      .get("https://swapi.dev/api/films/");
  }
}

