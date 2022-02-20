// @packages
import axios from "axios";
import { useQuery } from "react-query";

const developmentClient = "http://localhost:3001/api/v1";

export const useFetchMovies = (value: string) => {
  const isLongEnough = value.length > 0;
  return useQuery(
    ["movies", value],
    () =>
      axios
        .post(`${developmentClient}/movies`, {
          searchTerm: value,
        })
        .then((res) => res.data),
    { enabled: isLongEnough }
  );
};

export const useFetchMovie = (id: string | undefined) => {
  return useQuery("Movie", () =>
    axios(`${developmentClient}/movies/movie/${id}`).then((res) => res.data)
  );
};
