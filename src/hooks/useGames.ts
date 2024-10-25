import { GameQuery } from './../App';
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
  const useGames = (gameQuery:GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['gameQuery', gameQuery], // kuch bi is main change ho ga refetch ho ga just like dependency
    queryFn: ({pageParam=1, }) => apiClient.getAll({ 
      params: {
        genres: gameQuery.genre?.id , 
        parent_platforms : gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
       }
    }),
    getNextPageParam: (lastPage, allPages) =>{
      return lastPage.next ? allPages.length +1 : undefined;
    }
  });



export default useGames;
