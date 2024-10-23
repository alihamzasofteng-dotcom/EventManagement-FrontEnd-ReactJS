import useData from "./useData";
import { Genre } from "./useGenre";
// ye wala ha jo import ho rha ha for filtering games query string main neechy ja rha ha usedata main
import { Platform as PlatformFilter } from './usePlatforms';

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
    metacritic: number
  }
// games hook passes this selected genre as a query string paramerter to the data hook 
// we had to openup data hook and make it more flexible - now we can pass query string params and request data to request objects
// we also added an array of dependencies if any of this dependency changes , our effect will rerun and refetch the data from server
const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatformFilter | null) => useData<Game>('/games',{params: {genres: selectedGenre?.id , platforms : selectedPlatform?.id }},[selectedGenre?.id,selectedPlatform ?.id]);

export default useGames;