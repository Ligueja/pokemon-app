import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPokemons } from "../store/modules/pokemons/pokemonsSlice";
import { RootState } from "../store";
import { CardHome } from "../components/CardHome";
import { Grid, Typography, CircularProgress, Box } from "@mui/material";
import { Pagination } from "../components/Pagination";

export function Home() {
  const dispatch = useAppDispatch();
  const { pokemons, pagination, error } = useAppSelector(
    (state: RootState) => state.pokemons
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPokemons(page));

    // Rolar para o topo ao mudar de página
    window.scrollTo({
      top: 0,
    });
  }, [dispatch, page]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  if (error) return <Typography color='error'>{error}</Typography>;

  return (
    <Box sx={{ paddingTop: "80px", minHeight: "100vh" }}>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{
          marginX: "auto",
          maxWidth: "lg",
          minHeight: pokemons.length < 4 ? "calc(100vh - 160px)" : "100vh",
        }}
      >
        {pokemons.map((pokemon) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={pokemons.length < 4 ? 6 : 3}
            key={pokemon.id}
            display={"flex"}
            justifyContent={"center"}
          >
            <CardHome pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
      {pokemons.length === 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <CircularProgress />
        </Box>
      )}
      <Pagination
        page={page}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}
