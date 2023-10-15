import React from 'react';
import { View, Text } from 'react-native';

import Header from './Header';


const MedTime = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text> Med Time   e pronto... isso é tudo pessoal.</Text>
    </View>
  );
};

export default MedTime;
