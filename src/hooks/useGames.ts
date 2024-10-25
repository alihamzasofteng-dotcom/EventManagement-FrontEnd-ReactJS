import { GameQuery } from './../App';
import { useQuery } from "@tanstack/react-query";
import apiClient,{ FetchResponse } from "../services/api-client";
import { Platform } from './usePlatforms';

//array ky object main kya kya ho ga
export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number,
    rating_top: number
  }

  const useGames = (gameQuery:GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ['gameQuery', gameQuery], // kuch bi is main change ho ga refetch ho ga just like dependency
    queryFn: () => apiClient.get<FetchResponse<Game>>('/games',{
      // passing query string paramters
        params: {
        genres: gameQuery.genre?.id , 
        parent_platforms : gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
       }
    }).then(res=> res.data),
    staleTime: 24*60*60*1000,
   //initialData: {count: platforms.length, results: platforms}  
  });



export default useGames;
