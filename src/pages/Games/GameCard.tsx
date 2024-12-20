import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Game } from "./useGame";

type Props={
  game:Game
}

export default function GameCard({game}: Props) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`https://www.cheapshark.com/redirect?dealID=${game.dealID}`);
  };

  return (
    <div onClick={handleRedirect} style={{ cursor: "pointer" }}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image h={"202px"} src={game.thumb} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {game.isOnSale == "1" ? "Oferta" : "Venta Normal"}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {game.title}
          </Heading>
          <Text color={"gray.500"}>{game.steamRatingText}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Puntaje:{game.metacriticScore}</Text>
            <Text color={"gray.500"}>
              Antes:{game.normalPrice} - Ahora:{game.salePrice}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
