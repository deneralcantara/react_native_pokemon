import React, {useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {listPokemonsRequest, listPokemonsFail, listPokemonsSuccess} from '../../store/reducers/pokemons';
import { pokemons as pokemonService } from '../../config/services';
import {useSelector, useDispatch} from 'react-redux';
import { Name, Picture, Container, ButtonTextPaginate, ButtonPaginate } from './styles';

export default function Home({ navigation }) {
  
  const dispatch = useDispatch(); /* função que dispara as actions */
  const pokemons = useSelector(state => state.pokemons); /* pega os pokemons na store */
  
  //FUNCAO USE EFFECT PARA EXECUTAR A FUNCAO ASSIM QUE O COMPONENT RENDERIZAR.
  useEffect(() => {
    getListOfPokemons(); 
  }, []);

  function getListOfPokemons(url = null) {
    dispatch(listPokemonsRequest());

    pokemonService.getPokemons(url)
      .then(res => {
        dispatch(listPokemonsSuccess(res.data));
      })
      .catch(res => {
          showAlert('Alerta', 'Erro ao obter pokemons');
          dispatch(listPokemonsFail('Erro ao obter pokemons.'));
          
      });  
  }

  function loading() {
    return (
      <ActivityIndicator style={{marginTop: 50}} size="large" color="#053644"/>
    )
  }

  return (
    <View>
      {
          pokemons.loading && (
              loading()
          )
      }

      {
        !pokemons.loading && (
          <View style={{height: '100%'}}>
            <FlatList 
              data={pokemons.data.pokemons.results}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: "center",
              }}
              style={{flex: 1}}
              renderItem={({ item }) => pokemonShow(item, navigation)}
            />

            <View style={{flexDirection: "row" , height: "10%", width: "90%", alignSelf: "center"}}>
            
              <ButtonPaginate onPress={() => getListOfPokemons(pokemons.data.pokemons.previous)} marginLeft="auto" marginRight={null}>
                <ButtonTextPaginate>Página Anterior</ButtonTextPaginate>
              </ButtonPaginate>
              <ButtonPaginate onPress={() => getListOfPokemons(pokemons.data.pokemons.next)} marginRight="auto" marginLeft={null}>
                <ButtonTextPaginate>Próxima Página</ButtonTextPaginate>
              </ButtonPaginate>
            
            </View>
            
          </View>
        )
      }
    </View>
  );
};

function pokemonShow(item, navigation) {
  const { name, url } = item;

  const id = url.replace("https://pokeapi.co/api/v2/pokemon/", '').replace('/', '');
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
     <Container onPress={() => navigation.navigate('Pokemon', {url: url})}>
       <Name>{name}</Name>
       <Picture source={{uri: image}} />
     </Container>
  )
}