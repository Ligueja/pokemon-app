import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPokemonDetails } from "../store/modules/pokemons/pokemonsSlice";
import { RootState } from "../store";
import { Grid, CircularProgress, Box, Button } from "@mui/material";
import { CardDetails } from "../components/CardDetails";

export function Details() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedPokemon } = useAppSelector(
    (state: RootState) => state.pokemons
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPokemonDetails(parseInt(id)));
    }
  }, [dispatch, id]);

  if (!selectedPokemon) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ paddingTop: "80px", maxWidth: "lg", marginX: "auto" }}>
      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={10} md={8}>
          <CardDetails pokemon={selectedPokemon} />
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button
              variant='contained'
              onClick={() => navigate("/")}
              sx={{ backgroundColor: "#003366" }}
            >
              Back to List
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
