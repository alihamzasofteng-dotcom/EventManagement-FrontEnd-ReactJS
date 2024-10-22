import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  // initially no genre is selected. type btani ha ky ye variable store kr sakta ha genre object
  // ye kehna pry ga ye varible ya to genre object hold kr sakta ha ya null. or initiall null ha
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // larger devices
      }}
      templateColumns={{
        base: "1fr", // take all availble space on small
        lg: "200px 1fr", // first 200 baki main grid all space
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* Got notify and set the selected genre this causes the app component to rerender so  */}
          {/* on the next render we passed selected genre to game grid */}
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
