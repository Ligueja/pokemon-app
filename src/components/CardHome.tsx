import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Pokemon } from "../configs/interfaces/pokemon.interface";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addFavorite } from "../store/modules/favorites/favoritesSlice";

interface CardHomeProps {
  pokemon: Pokemon;
}

export function CardHome({ pokemon }: CardHomeProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite.favorites);

  const [openAlert, setOpenAlert] = useState(false);

  const handleAddToFavorites = () => {
    // Verifica se o Pokémon já está na lista da Pokedex
    const isAlreadyFavorite = favorites.some((fav) => fav.id === pokemon.id);

    if (isAlreadyFavorite) {
      // Se o Pokémon já está na lista da Pokedex, exibe o alerta
      setOpenAlert(true);
    } else {
      // Caso contrário, adiciona o Pokémon à lista da Pokedex
      dispatch(addFavorite(pokemon));
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  // transformar o tamanho (altura) em metros
  const heightInMeters = pokemon.size ? (pokemon.size / 10).toFixed(1) : "N/A";

  return (
    <Box>
      <Card
        sx={{
          width: "100%",
          maxWidth: 300,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          minHeight: 300,
          maxHeight: 350,
          border: "4px solid #ddd",
          borderRadius: "8px",
          boxShadow: 10,
          mb: 2,
          backgroundColor: "#ffff0013",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            zIndex: 10,
          },
        }}
      >
        <CardMedia
          component='img'
          sx={{
            width: "150px",
            height: "140px",
            objectFit: "contain",
            marginBottom: 1,
          }}
          image={pokemon.image}
          alt={pokemon.name}
        />
        <CardContent
          sx={{
            textAlign: "center",
            padding: 1,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant='h6' gutterBottom>
              {pokemon.name.toUpperCase()}
            </Typography>
            <Typography variant='body2'>ID: {pokemon.id}</Typography>
            <Typography variant='body2'>Height: {heightInMeters} m</Typography>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Link
              to={`/details/${pokemon.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
              }}
            >
              Details
            </Link>
            <IconButton onClick={handleAddToFavorites}>
              <FavoriteIcon color='error' />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      {/* Alerta para Pokémon já existente na Pokedex */}
      <Snackbar
        open={openAlert}
        autoHideDuration={1500}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginRight: "80px" }}
      >
        <Alert onClose={handleCloseAlert} severity='error'>
          This Pokémon is already in your Pokedex!
        </Alert>
      </Snackbar>
    </Box>
  );
}
