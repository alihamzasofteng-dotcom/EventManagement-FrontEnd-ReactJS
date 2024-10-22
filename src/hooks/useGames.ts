import useData from "./useData";
import { Genre } from "./useGenre";

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
    metacritic: number
  }
// games hook passes this selected genre as a query string paramerter to the data hook 
// we had to openup data hook and make it more flexible - now we can pass query string params and request data to request objects
// we also added an array of dependencies if any of this dependency changes , our effect will rerun and refetch the data from server
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games',{params: {genres: selectedGenre?.id}},[selectedGenre?.id]);

export default useGames;