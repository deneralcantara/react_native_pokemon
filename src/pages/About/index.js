import React from 'react';
import {} from 'react-native';
import { Container, Title, Text } from './styles';

export default function About() {
  return (
    <Container>
      <Title>Sobre o PokeApp</Title>
      <Text>O PokeApp foi desenvolvido utilizando a API PokeApi no seguinte link: https://pokeapi.co.</Text>

      <Title style={{marginTop: 50}}>Tecnologias e Bibliotecas</Title>
      <Text>Esse aplicativo utilizou algumas tecnologias e bibliotecas como o React Redux, React Navigation, Axios, Redux Persist e Styled Components.</Text>
    </Container>
  );
};
