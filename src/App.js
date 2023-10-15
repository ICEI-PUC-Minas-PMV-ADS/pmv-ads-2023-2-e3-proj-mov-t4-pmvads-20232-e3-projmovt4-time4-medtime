
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './src/components/Header';
import QuemSomos from './src/components/QuemSomos';
import MedTime from './src/components/MedTime';
import Novidades from './src/components/Novidades';
import Contatos from './src/components/Contatos';
import Footer from './src/components/Footer';

const AppNavigator = createStackNavigator({
  Header: {
    screen: QuemSomos,
    navigationOptions: {
      header: null,
    },
  },
  QuemSomos: {
    screen: QuemSomos,
  },
  MedTime: {
    screen: MedTime,
  },
  Novidades: {
    screen: Novidades,
  },
  Contatos: {
    screen: Contatos,
  },
  
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppContainer />
      <Footer />
    </View>
  );
};


export default App;
