import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Contatos = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Lógica para enviar os dados do formulário.
  const handleEnviar = () => {
    // Coletar dados do formulário
    const dados = {
      nome,
      telefone,
      email,
      mensagem,
    };

    // Simular uma solicitação POST para um servidor fictício
    fetch('https://seuservidor.com/enviar-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((resultado) => {
        // Lógica após o envio bem-sucedido (pode ser um redirecionamento, exibição de mensagem, etc.)
        console.log('Dados enviados com sucesso:', resultado);
      })
      .catch((error) => {
        // Lógica para lidar com erros durante o envio
        console.error('Erro ao enviar dados:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Contato</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mensagem"
            value={mensagem}
            onChangeText={(text) => setMensagem(text)}
          />
          <Button title="Enviar" onPress={handleEnviar} />
        </View>
        <Text style={styles.title2}>Informações da nossa unidade:</Text>
        <Text style={styles.unidadeInfo}>
          Unidade de Atendimento de Saúde MedTime{'\n'}
          Endereço: Rua das Flores, 1234{'\n'}
          Cidade: Cidade dos Remédios{'\n'}
          Estado: Medicina{'\n'}
          CEP: 12345-678{'\n'}
          Telefone: (12) 3456-7890{'\n'}
          E-mail: contato@medtime.com
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  form: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
  title2: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 16,
  },
  unidadeInfo: {
    fontSize: 12,
    padding: 10,
  },
});

export default Contatos;



