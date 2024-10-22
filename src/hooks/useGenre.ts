
import { useState,useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

  
interface Genre {
    // what we need from url  https://api.rawg.io/docs/#operation/games_list
    id: number;
    name: string;
  }

interface FetchGenresResponse{
  count: number,
  results: Genre[]
}  
  
const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    // effect hook to send a fetch request to backend
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres",{signal: controller.signal})
        //setgame oe aty us ny interface define kiya ha
        .then((res) => {
          setGenres(res.data.results)
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

    return {genres, error, isLoading}
}

export default useGenre