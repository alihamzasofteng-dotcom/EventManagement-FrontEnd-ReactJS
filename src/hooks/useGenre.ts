
import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
    // what we need from url  https://api.rawg.io/docs/#operation/games_list
    id: number;
    name: string;
    image_background: string;
  }

// genre ab baakcend ko nai call kr rhy balky object pkr ky data file main store kra lya ha
// kue ky ye change ni hota to instantly nzar aye
//const useGenre = () => useData<Genre>('/genres');
const useGenre = () => ({data: genres, isLoading: false, error:null});
export default useGenre;