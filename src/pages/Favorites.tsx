import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Box, Typography } from "@mui/material";
import { CardFavorite } from "../components/CardFavorite";
import { removeFavorite } from "../store/modules/favorites/favoritesSlice";

export function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id: number) => {
    dispatch(removeFavorite(id));
  };

  return (
    <Box sx={{ paddingTop: "70px", paddingLeft: "20px", paddingRight: "20px" }}>
      <Typography
        variant='h4'
        gutterBottom
        textAlign={"center"}
        fontSize={"100px"}
        sx={{ marginBottom: "20px" }}
      >
        Pokedex
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant='body1' textAlign={"center"}>
          No Pokémon added to the Pokedex yet.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {favorites.map((pokemon) => (
            <CardFavorite
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={handleRemoveFavorite}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
