import { useEffect, useState } from "react";
import { Character, Info } from "../models";
import axios from "axios";

export const useFetchCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>({next: null, prev: null});
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setCharacters(response.data.results);
      setInfo(response.data.info);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadNext  = () => {
    if (info.next) {
      fetchCharacters(info.next);
    }
  }

  const loadPrev = () => {
    if (info.prev) {
      fetchCharacters(info.prev);
    }
  }


  useEffect(() => {
    const initialUrl = "https://rickandmortyapi.com/api/character";
    fetchCharacters(initialUrl);
  }, []);


  return {
    characters,
    loading,
    loadNext,
    loadPrev,
    info
  };
};
