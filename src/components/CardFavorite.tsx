import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Pokemon } from "../configs/interfaces/pokemon.interface";

interface CardFavoriteProps {
  pokemon: Pokemon;
  onRemove: (id: number) => void;
}

export function CardFavorite({ pokemon, onRemove }: CardFavoriteProps) {
  return (
    <Box
      sx={{
        border: "4px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
        position: "relative",
        boxShadow: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "150px",
        height: "250px",
        backgroundColor: "#ffff0013",
      }}
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
      <Typography variant='h6' gutterBottom>
        {pokemon.name}
      </Typography>
      <IconButton
        sx={{
          color: "black",
          "&:hover": {
            color: "gray",
          },
          position: "absolute",
          bottom: "10px",
        }}
        onClick={() => onRemove(pokemon.id)}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
