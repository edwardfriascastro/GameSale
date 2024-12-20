import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "./useGame";

function Games() {
  const { data, isLoading } = useGame();

  {
    isLoading && "Cargando....";
  }

  return (
    <SimpleGrid p={"20px"} columns={[2, null, 3]} spacing="40px">
      {data?.map((game) => (
        <GameCard key={game.gameID} game={game} />
      ))}
    </SimpleGrid>
  );
}

export default Games;
