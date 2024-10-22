
import useData from "./useData";
export interface Genre {
    // what we need from url  https://api.rawg.io/docs/#operation/games_list
    id: number;
    name: string;
  }

const useGenre = () => useData<Genre>('/genres');
export default useGenre;