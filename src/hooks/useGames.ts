import useData from "./useData";

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

const useGames = () => useData<Game>('/games');

export default useGames;