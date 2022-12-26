import { useState, useEffect } from "react";
import { loadFilms } from "../services/loadFilms";

export default function useFilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const films = loadFilms();
    setFilms(films);
  }, []);

  return [films];
}