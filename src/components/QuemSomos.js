import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

import Header from './Header';

const QuemSomos = ({ navigation }) => {
  const navigateToMedPill = () => {
    navigation.navigate('MedPill');
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>Sobre Nós</Text>
        <Text style={styles.paragraph}>
          Somos um grupo de estudantes de graduação em Análise e Desenvolvimento
          de Sistemas da PUC Minas, dedicados a desenvolver soluções inovadoras
          no campo da saúde.
           {'\n\n'}  
          Nossa visão é criar um aplicativo que aborde os desafios enfrentados
          no acesso, administração e adesão adequada a medicamentos. Nosso foco
          principal é atender pacientes com necessidades complexas de
          tratamento, incluindo idosos e pessoas com condições médicas crônicas,
          como Alzheimer.
           {'\n\n'}
          O objetivo principal deste trabalho é desenvolver um software inovador
          que facilite a organização, o gerenciamento e o acompanhamento dos
          regimes de tratamento medicamentoso. Acreditamos que isso contribuirá
          para melhorar a qualidade de vida dos pacientes e reduzir os riscos
          associados à não adesão aos tratamentos. 
           {'\n'}
        </Text>
        <Button title="Conheça nosso MedPill" onPress={navigateToMedPill} />
                 
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

export default QuemSomos;
