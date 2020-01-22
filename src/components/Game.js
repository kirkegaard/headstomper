import React from 'react';
import { Grid, Typography, List, ListItem, Link, Divider } from '@material-ui/core';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};

const Game = (props) => {
  return (
    <Grid item sm={9}>
      <Typography variant="h3">{props.title}</Typography>
      <Typography variant="body1">{props.description}</Typography>
      <Typography variant="h4">Tournament starts</Typography>
      <Typography variant="body1">{props.startDate}</Typography>

      <Divider/>

      <List style={flexContainer}>
        { props.rules ?
          <ListItem>
            <Link color="inherit" href="#">
              Rules
            </Link>
          </ListItem>
          : null
        }
        { props.brackets ?
          <ListItem>
            <Link color="inherit" href={props.brackets}>
              Brackets
            </Link>
          </ListItem>
          : null
        }
        { props.stream ?
          <ListItem>
            <Link color="inherit" href={props.stream}>
              Stream
            </Link>
          </ListItem>
          : null
        }
        { props.link ?
          <ListItem>
            <Link color="inherit" href={props.link.url}>
              {props.link.text}
            </Link>
          </ListItem>
          : null
        }
      </List>
    </Grid>
  );
}

export default Game;