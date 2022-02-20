// @packages
import axios from "axios";
import { useQuery } from "react-query";

export const useFetchMovies = (value: string) => {
  const isLongEnough = value.length > 1;
  return useQuery(
    ["movies", value],
    () =>
      axios
        .post("http://localhost:3001/api/v1/movies", {
          searchTerm: value,
        })
        .then((res) => res.data),
    { enabled: isLongEnough }
  );
};

export const useFetchMovie = (id: string | undefined) => {
  return useQuery("Movie", () =>
    axios(`http://localhost:3001/api/v1/movies/${id}`).then((res) => res.data)
  );
};
