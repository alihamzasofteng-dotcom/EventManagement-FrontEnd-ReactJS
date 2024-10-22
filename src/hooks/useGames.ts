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
    parent_platforms: {platform: Platform}[],
    metacritic: number
  }
  
  interface FetchGamesResponse {
    // what we need from url  https://api.rawg.io/docs/#operation/games_list
    count: number;
    results: Game[];
  }
  
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    // effect hook to send a fetch request to backend
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games",{signal: controller.signal})
        //setgame oe aty us ny interface define kiya ha
        .then((res) => {
          setGames(res.data.results)
          setLoading(false)
        })
        .catch((err) => 
        {   
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        }
            );
        return () => controller.abort();
    }, []); // to avoid infinite refetching

    return {games, error, isLoading}
}

export default useGames;