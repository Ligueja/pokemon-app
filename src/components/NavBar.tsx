import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, Box, IconButton, Toolbar, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import pokemonLogo from "../assets/pokemon2.png";
import { RootState } from "../store";

export function Navbar() {
  const navigate = useNavigate();

  // Obtém o número de pokemons na Pokedex
  const favoritesCount = useSelector(
    (state: RootState) => state.favorite.favorites.length
  );

  return (
    <AppBar position='fixed'>
      <Toolbar
        component='nav'
        sx={{ justifyContent: "space-between", backgroundColor: "#333333" }}
      >
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
        </IconButton>

        <Box
          component='img'
          src={pokemonLogo}
          alt='Pokémon'
          sx={{
            height: "70px",
            width: "350px",
            margin: "0 auto",
          }}
        />

        <IconButton
          size='large'
          edge='end'
          color='error'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => navigate("/favorites")}
        >
          <Badge
            badgeContent={favoritesCount}
            color='error'
            showZero={false} // Não mostra o badge se o contador for zero
          >
            <FavoriteIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
