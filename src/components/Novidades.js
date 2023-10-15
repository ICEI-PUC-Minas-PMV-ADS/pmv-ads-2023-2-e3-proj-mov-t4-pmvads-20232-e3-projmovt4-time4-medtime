import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Linking, StyleSheet } from 'react-native';

import Header from './Header';

const NewsItem = ({ title, description, url }) => {
  return (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text
        style={{ color: 'blue', textDecorationLine: 'underline' }}
        onPress={() => Linking.openURL(url)}
      >
        Read more
      </Text>
    </View>
  );
};

const Novidades = ({ navigation }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const apiKey = '6e476535ed714ff193627cd77c8dfaf4';
    const apiUrl = `https://newsapi.org/v2/everything?q=medicamento&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok' && data.articles) {
          const primeirasNoticias = data.articles.slice(0, 5);
          setNoticias(primeirasNoticias);
        }
      })
      .catch((error) => console.error('Erro ao buscar notícias:', error));
  }, []);

  return (
    <View>
      <Header navigation={navigation} />
      <Text style={styles.titleNoticia}>Notícias sobre Medicamentos:</Text>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <NewsItem
            title={item.title}
            description={item.description}
            url={item.url}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleNoticia: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  newsItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default Novidades;


