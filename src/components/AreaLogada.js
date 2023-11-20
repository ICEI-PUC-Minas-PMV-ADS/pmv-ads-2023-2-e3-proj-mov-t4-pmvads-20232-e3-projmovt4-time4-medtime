import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

import Header from './Header'; 

const AreaLogada = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
       <Text>Area Logada</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    textAlign: 'justify',
    paddingHorizontal: 15,
  },
});

export default AreaLogada;
