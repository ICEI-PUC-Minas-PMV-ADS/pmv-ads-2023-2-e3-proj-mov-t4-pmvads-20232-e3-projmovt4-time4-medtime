import React from 'react';
import { View, Text } from 'react-native';

const SearchResults = ({ results }) => {
  return (
    <View>
      {results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
    </View>
  );
};

export default SearchResults;
