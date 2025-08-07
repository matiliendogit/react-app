const API_KEY = "a1907c7e";

export const searchMovies = async ({ search }) => {
  if (search === "") return;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search || [];
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }));
  } catch (e) {
    console.error("Error fetching movies:", e.message);
    return [];
  }
};
