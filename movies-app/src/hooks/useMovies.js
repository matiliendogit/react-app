import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/searchMovies";

export function useMovies({ search, sort }) {
  const [movies, SetMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current == search) return;
    try {
      setError(null);
      setLoading(true);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      SetMovies(newMovies);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) // Compara con tildes el localCompare
      : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, getMovies, loading, error };
}
