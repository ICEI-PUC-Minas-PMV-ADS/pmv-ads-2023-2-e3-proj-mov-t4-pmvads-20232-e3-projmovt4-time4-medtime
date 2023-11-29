import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}> 
        Desenvolvido pelo time do curso de ADS - PUC Minas 2023 - Eixo 3
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#009bb6', // Cor de fundo do rodapé
    padding: 10,
    alignItems: 'center',
    bottom: 0, // Coloca o rodapé na parte inferior da tela
    width: '100%', // Ocupa a largura total da tela
    marginTop: 10,
  },
  text: {
    fontSize: 9,
    fontWeight: 'bold', 
  },
});

export default Footer;
