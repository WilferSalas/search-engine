// @packages
import axios from "axios";
import { useQuery } from "react-query";

const developmentClient = "http://localhost:3001/api/v1";

export const useFetchMovies = (value: string) => {
  return useQuery(
    "movies",
    () =>
      axios
        .post(`${developmentClient}/movies`, {
          searchTerm: value,
        })
        .then((res) => res.data),
    { enabled: false }
  );
};

export const useFetchMovie = (id: string | undefined) => {
  return useQuery("Movie", () =>
    axios(`${developmentClient}/movies/movie/${id}`).then((res) => res.data)
  );
};

export const useFetchSimilar = (value: string) => {
  return useQuery(
    "similar",
    () =>
      axios
        .post(`${developmentClient}/movies/similar`, {
          searchTerm: value,
        })
        .then((res) => res.data),
    { enabled: false }
  );
};
