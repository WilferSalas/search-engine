// @packages
import axios from "axios";
import { useQuery } from "react-query";

const client = "http://localhost:3001/api/v1";

export const useFetchMovies = (value: string) => {
  const isLongEnough = value.length > 0;
  return useQuery(
    ["movies", value],
    () =>
      axios
        .post(`${client}/movies`, {
          searchTerm: value,
        })
        .then((res) => res.data),
    { enabled: isLongEnough }
  );
};

export const useFetchMovie = (id: string | undefined) => {
  return useQuery("Movie", () =>
    axios(`${client}/movies/movie/${id}`).then((res) => res.data)
  );
};
