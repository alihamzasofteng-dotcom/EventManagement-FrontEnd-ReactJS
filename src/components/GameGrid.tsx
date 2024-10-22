import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

//array ky object main kya kya ho ga
interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  // what we need from url  https://api.rawg.io/docs/#operation/games_list
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  // effect hook to send a fetch request to backend
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      //setgame oe aty us ny interface define kiya ha
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []); // to avoid infinite refetching
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
