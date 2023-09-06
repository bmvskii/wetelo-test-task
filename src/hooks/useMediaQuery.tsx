import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  const handleChange = (e: MediaQueryListEvent) => {
    setMatches(e.matches);
  };

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    matchQueryList.addEventListener("change", handleChange);
    setMatches(matchQueryList.matches);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}