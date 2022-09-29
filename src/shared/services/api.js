import axios from 'axios'
import React from 'react'
import { LogBox } from 'react-native';

export const getAllPokemon = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return res;
  } catch (error) {
    return error.response;
  }
}
