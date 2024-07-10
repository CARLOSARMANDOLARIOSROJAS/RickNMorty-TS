import { useEffect, useState } from "react";
import { Character } from "../models";

export const useFavorites = () => {
    
    const initialFavs = (): Character[] => {
        const localStorageFavorites = localStorage.getItem("favorites");
        return localStorageFavorites ? JSON.parse(localStorageFavorites) : [];
    };
    
    const [favorites, setFavorites] = useState(initialFavs);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character: Character) => {
    const isFavorite = favorites.some((c) => c.id === character.id);

    if (isFavorite) {
      setFavorites(favorites.filter((c) => c.id !== character.id));
    } else {
      console.log("Adding character to favorites:", character);
      const updatedFavorites = [...favorites, character];
      setFavorites(updatedFavorites);
    }
  };

  return { favorites, toggleFavorite };
};
