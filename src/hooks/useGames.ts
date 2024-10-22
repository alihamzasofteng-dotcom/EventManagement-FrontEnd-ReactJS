import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
    parent_platforms: {platform: Platform}[]
  }
  
  interface FetchGamesResponse {
    // what we need from url  https://api.rawg.io/docs/#operation/games_list
    count: number;
    results: Game[];
  }
  
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    // effect hook to send a fetch request to backend
    useEffect(() => {
      const controller = new AbortController();
      apiClient
        .get<FetchGamesResponse>("/games",{signal: controller.signal})
        //setgame oe aty us ny interface define kiya ha
        .then((res) => setGames(res.data.results))
        .catch((err) => 
        {   
            if(err instanceof CanceledError) return;
            setError(err.message)
        }
            );
        return () => controller.abort();
    }, []); // to avoid infinite refetching

    return {games, error}
}

export default useGames;