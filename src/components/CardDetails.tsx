import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Grid,
} from "@mui/material";
import { Pokemon } from "../configs/interfaces/pokemon.interface";

interface CardDetailsProps {
  pokemon: Pokemon;
}

export function CardDetails({ pokemon }: CardDetailsProps) {
  // transformar o tamanho (altura) em metros
  const heightInMeters = pokemon.size ? (pokemon.size / 10).toFixed(1) : "N/A";

  return (
    <Card
      sx={{
        boxShadow: 20,
        border: "4px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#ffff0013",
      }}
    >
      <CardMedia
        component='img'
        image={pokemon.image}
        alt={pokemon.name}
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography variant='h5' gutterBottom textAlign={"center"}>
          {pokemon.name.toUpperCase()} (ID: {pokemon.id})
        </Typography>
        <Typography variant='body1' textAlign={"center"}>
          <strong>Height:</strong> {heightInMeters} m
        </Typography>
        <Typography variant='body1' textAlign={"center"}>
          <strong>Abilities:</strong>{" "}
          {pokemon.abilities.map((ability) => ability.abilityName).join(", ")}
        </Typography>

        <Box
          sx={{
            border: "1px solid #000",
            borderRadius: "8px",
            padding: 2,
            marginTop: 2,
          }}
        >
          <Typography variant='h6' gutterBottom textAlign={"center"}>
            <strong>Stats</strong>
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {pokemon.stats.slice(0, 3).map((stat) => (
                  <Typography
                    key={stat.statName}
                    variant='body2'
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      minWidth: "150px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stat.statName}: {stat.base_stat}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {pokemon.stats.slice(3).map((stat) => (
                  <Typography
                    key={stat.statName}
                    variant='body2'
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      minWidth: "150px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stat.statName}: {stat.base_stat}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
