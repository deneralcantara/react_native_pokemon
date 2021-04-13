import React, {useEffect} from 'react';
import {View, ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import {getPokemonRequest, getPokemonFail, getPokemonSuccess} from '../../store/reducers/pokemon';
import { pokemon as pokemonService } from '../../config/services';
import {useSelector, useDispatch} from 'react-redux';
import { Name, Picture, Container, Pictures, Type, Title, Stat } from './styles';

export default function Pokemon({ route }) {
  const dispatch = useDispatch(); /* função que dispara as actions */
  const pokemon = useSelector(state => state.pokemon); /* pega o pokemon na store */

  const url = route.params?.url;
  
  useEffect(() => {
    getPokemon(url); 
  }, []);

  function getPokemon(url = null) {
    dispatch(getPokemonRequest());

    pokemonService.getPokemon(url)
      .then(res => {
        dispatch(getPokemonSuccess(res.data));
      })
      .catch(res => {
          showAlert('Alerta', 'Erro ao obter pokemon');
          dispatch(getPokemonFail('Erro ao obter pokemon.'));
          
      });  
  }

  function loading() {
    return (
      <ActivityIndicator style={{marginTop: 50}} size="large" color="#053644"/>
    )
  }

  return (
    <SafeAreaView>
      {
          pokemon.loading && (
              loading()
          )
      }

      {
        !pokemon.loading && (
          <Container contentContainerStyle={{alignItems: "center"}}>
            <Name>{pokemon.data.pokemon.name} - Sprites</Name>
            <Pictures>
              <Picture source={{uri: pokemon.data.pokemon.sprites.front_default}} />
              <Picture source={{uri: pokemon.data.pokemon.sprites.back_default}} />
            </Pictures>
            <Title>Experiência Base</Title>
            <Type>{pokemon.data.pokemon.base_experience}</Type>
            <Title>Habilidades</Title>
            {
              pokemon.data.pokemon.abilities.map(ability => {
                return (
                  <Type>{ability.ability.name}</Type>
                );
              })  
            }
            <Title>Tipos do Pokémon</Title>
            {
              pokemon.data.pokemon.types.map(type => {
                return (
                  <Type>{type.type.name}</Type>
                );
              })  
            }
            <Title>Estatísticas</Title>
            {
              pokemon.data.pokemon.stats.map(stat => {
                return (
                  <Stat>{stat.stat.name} - {stat.base_stat}</Stat>
                );
              })  
            }
          </Container>
        )
      }
    
    </SafeAreaView>
  );
};
