import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Genre {
    // what we need from url  https://api.rawg.io/docs/#operation/games_list
    id: number;
    name: string;
    image_background: string;
  }

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res=> res.data),
  staleTime: 24*60*60*1000,//24 hour it hardly ever change we ca also set for 1 year 
  initialData: {count: genres.length, results: genres}  // so taht we donot have to go to the backnd and show user a spinner -
                                                           // we can give a static data
});
export default useGenre;