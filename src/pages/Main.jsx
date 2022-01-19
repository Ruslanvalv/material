import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../Components/Header';
import PokemonInfo from '../Components/PokemonInfo';

import styles from './Main.module.css';
const CustomizedContainer = styled(Container)`
  max-width: 980px !important;
  padding: 0 !important;
`;
const CustomizedButton = styled(Button)`
  margin-right: 6px;
  margin-bottom: 10px;
  padding: 20px;
  background: #1986ec;
  border-radius: 44px;
  text-transform: lowercase;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 100%;
`;

function Main() {
  const [items, setItems] = useState([]);
  const [pokemon, setPokemon] = useState();

  const getPokemon = async (url) => {
    const resp = await axios.get(url);
    setPokemon(resp.data);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=10');
      setItems(response.data.results);
    }

    fetchData();
  }, []);

  return (
    <CustomizedContainer>
      <Header />
      <Grid container>
        <Grid display="flex" alignContent="center" flexWrap="wrap" item xs={6} p={1}>
          {items.map((item) => (
            <CustomizedButton
              variant="contained"
              className={styles.Button}
              onClick={() => {
                getPokemon(item.url);
              }}
              key={item.url}>
              {item.name}
            </CustomizedButton>
          ))}
        </Grid>
        <Grid item xs={6}>
          {pokemon ? (
            <PokemonInfo pokemon={pokemon} />
          ) : (
            <Box className={styles.Box}>
              <h1>Выбери покемона, чтобы узнать его подробности</h1>
            </Box>
          )}
        </Grid>
      </Grid>
    </CustomizedContainer>
  );
}

export default Main;
