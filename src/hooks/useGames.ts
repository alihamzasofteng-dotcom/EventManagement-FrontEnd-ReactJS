import { GameQuery } from './../App';
import { useQuery } from "@tanstack/react-query";
import apiClient,{ FetchResponse } from "../services/api-client";

// ye wala ha jo icons main lag rha ha game card main
export interface Platform{
  id: number,
  name: string, 
  slug: string
}

//array ky object main kya kya ho ga
export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number,
    rating_top: number
  }
// games hook passes this selected genre as a query string paramerter to the data hook 
// we had to openup data hook and make it more flexible - now we can pass query string params and request data to request objects
// we also added an array of dependencies if any of this dependency changes , our effect will rerun and refetch the data from server
// const useGames = (gameQuery:GameQuery) => useData<Game>('/games',
//   { 
//     params: {
//     genres: gameQuery.genre?.id , 
//     platforms : gameQuery.platform?.id,
//     ordering: gameQuery.sortOrder,
//     search: gameQuery.searchText
//    }
//   },
//    [gameQuery]);


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
