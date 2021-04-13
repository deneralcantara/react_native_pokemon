import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react';

import Home from './src/pages/Home';
import Pokemon from './src/pages/Pokemon';
import About from './src/pages/About';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;

          if(route.name === "Home"){
            iconName = "home";
          }
          else if(route.name === "Sobre"){
            iconName = "help";
          }

          return <Icon name={iconName} size={size} color={color} />;
        }
      })}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Sobre" component={About} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="PokeApp" 
            component={Tabs}/>

          <Stack.Screen 
            name="Pokemon" 
            component={Pokemon} 
            options={{
              title: "Detalhes do Pokémon"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>

  );
};
