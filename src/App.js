import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/components/AppNavigator'; 
import Footer from './src/components/Footer';

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