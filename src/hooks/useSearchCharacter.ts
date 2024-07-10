import { useEffect, useState } from "react";
import { Character } from "../models";

export const useSearchCharacter = (initialCharacters: Character[]) => {
  const [query, setQuery] = useState("");
  const [filteredCharacters, setFilteredCharacters] =
    useState(initialCharacters);

  useEffect(() => {
    if (query === "") {
      setFilteredCharacters(initialCharacters);
    } else {
      const filtered = initialCharacters.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  }, [query, initialCharacters]);

  return {
    query,
    setQuery,
    filteredCharacters,
  };
};
