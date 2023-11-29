import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View>
      <TextInput
        placeholder="Pesquisar..."
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
};


const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40, // Altura desejada da linha
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  button: {
    // adicionar estilos do botão aqui
  },
});


export default SearchBar;
