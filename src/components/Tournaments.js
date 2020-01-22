import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import Game from './Game';
import Games from '../data/games';

const Tournaments = () => {
  return (
    <Container className="container">
      <Typography variant="h2">Tournaments</Typography>
      <Grid
        container
        spacing={5}
      >
        { Games.map((data, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Game {...data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Tournaments;