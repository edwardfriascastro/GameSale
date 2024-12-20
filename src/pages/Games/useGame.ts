import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Game = {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
};

export default function useGame() {
  return useQuery<Game[]>({
    queryKey: ["game"],
    queryFn: () =>
      axios
        .get<Game[]>("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
        .then((response) => response.data),
  });
}
