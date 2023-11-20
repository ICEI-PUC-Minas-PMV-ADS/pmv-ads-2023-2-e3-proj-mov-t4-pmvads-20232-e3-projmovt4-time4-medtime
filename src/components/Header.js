import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';


const Header = ({ navigation }) => {
  const activeRouteName = navigation.state.routeName;

  const navigateToSignin = () => {
    navigation.navigate('Signin'); 
    };

  return (
    <View style={styles.header}>
      {/* Primeira linha: Botão de Login */}
      <View style={styles.loginContainer}>
         <Button
          title="Login"
          onPress={navigateToSignin}
         />
      </View>

      {/* Segunda linha: Logo */}
      <Image
        source={require('./assets/MedTime.png')}
        style={styles.logo}
      />

      {/* Terceira linha: Menu */}
      <View style={styles.menu}>
        <MenuItem
          title="Quem Somos"
          active={activeRouteName === 'QuemSomos'}
          onPress={() => navigation.navigate('QuemSomos')}
        />
        <MenuItem
          title="MedPill"
          active={activeRouteName === 'MedPill'}
          onPress={() => navigation.navigate('MedPill')}
        />
        <MenuItem
          title="Novidades"
          active={activeRouteName === 'Novidades'}
          onPress={() => navigation.navigate('Novidades')}
        />
        <MenuItem
          title="Contatos"
          active={activeRouteName === 'Contatos'}
          onPress={() => navigation.navigate('Contatos')}
        />
      </View>
    </View>
  );
};

const MenuItem = ({ title, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.menuItem, active ? styles.activeMenuItem : null]}
      onPress={onPress}
    >
      <Text style={[styles.menuText, active ? styles.activeMenuText : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column', // Alterado para layout de coluna
    alignItems: 'center', // Centralize os elementos na coluna
    padding: 10,
    backgroundColor: '#009bb6',
  },
  loginContainer: {
    alignSelf: 'flex-end',

  },
  logo: {
    width: 150,
    height: 100,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 10,
  },
  menuItem: {
    marginHorizontal: 10,
    padding: 5,
  },
  menuText: {
    color: 'black',
  },
  activeMenuItem: {
    backgroundColor: '#009bb6',
  },
  activeMenuText: {
    color: 'white',
  },
    
});

export default Header;


