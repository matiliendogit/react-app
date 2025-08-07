import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === "";
      return;
    }

    if (search === "") {
      setError("Please enter a search term");
      return;
    }

    if (search.length < 3) {
      setError("Search term must be at least 3 characters long");
      return;
    }

    if (/^\d+$/.exec(search)) {
      setError("Search term cannot be only numbers");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
