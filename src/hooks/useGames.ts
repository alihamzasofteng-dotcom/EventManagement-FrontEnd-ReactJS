import { GameQuery } from './../App';
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from './usePlatforms';

const apiClient  = new APIClient<Game>('/games');


//array ky object main kya kya ho ga
export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number,
    rating_top: number
  }
  //idr fetch is liye ky to tell the type of the data that useQuery expects from the queryFn
  const useGames = (gameQuery:GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ['gameQuery', gameQuery], // kuch bi is main change ho ga refetch ho ga just like dependency
    queryFn: () => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id , 
        parent_platforms : gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
       }
    }),
    staleTime: 24*60*60*1000,
   //initialData: {count: platforms.length, results: platforms}  
  });



export default useGames;
