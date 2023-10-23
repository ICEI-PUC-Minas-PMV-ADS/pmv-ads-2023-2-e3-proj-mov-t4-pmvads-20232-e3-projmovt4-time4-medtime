import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import * as ImagePicker from 'expo-image-picker';
import { getReceita, insertReceita } from './Services/ReceitaServicesDB';
import { useNavigation } from '@react-navigation/native';

const Receita = () => {
  const [Nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [CEP, setCEP] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Bairro, setBairro] = useState('');
  const [Cidade, setCidade] = useState('');
  const [Estado, setEstado] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [Email, setEmail] = useState('');
  const [Mensagem, setMensagem] = useState('');
  const [ImagemPath, setImagemPath] = useState(null);

  const navigation = useNavigation();

  const [Receita, setReceita] = useState([]);

  useEffect(() => {
    getReceita().then((dados) => {
      setReceita(dados);
    });
  }, []);

  // Lógica para enviar os dados do formulário.
  const handleEnviar = () => {
    // Coletar dados do formulário
    const dados = {
      Nome,
      CPF,
      CEP,
      Endereco,
      Bairro,
      Cidade,
      Estado,
      Telefone,
      Email,
      Mensagem,
      ImagemPath,
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

  // Função para escolher uma imagem
  const pickImage = async () => {
    // Solicitar permissões para acessar a biblioteca de imagens
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      console.error('Permissão negada para acessar a biblioteca de imagens');
      return;
    }

    // Escolher uma imagem da biblioteca de imagens
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagemPath(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Receita</Text>
        <Text style={styles.paragraph}>
          Preencha o formulário abaixo que nossos colaboradores farão o seu orçamento e em breve entrarão em contato!
          Desde já agradecemos a preferencia em nossos serviços.
        </Text>

        <View style={styles.form}>

        <Text>Nome:</Text>
        <TextInput
          value={Nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Digite seu nome"
          style={styles.input}
          />

        <Text>CPF:</Text>
         <TextInput
          value={CPF}
          onChangeText={(text) => setCPF(text)}
          placeholder="Digite seu CPF"
          style={styles.input}
          />

        <Text>CEP:</Text>
         <TextInput
          value={CEP}
          onChangeText={(text) => setCEP(text)}
          placeholder="Digite seu CEP"
          style={styles.input}
          />

        <Text>Endereco:</Text>
          <TextInput
          value={Endereco}
          onChangeText={(text) => setEndereco(text)}
          placeholder="Digite seu Endereço e nº da residência"
          style={styles.input}
          />

        <Text>Bairro:</Text>
          <TextInput
          value={Bairro}
          onChangeText={(text) => setBairro(text)}
          placeholder="Digite seu Bairro"
          style={styles.input}
          />

        <Text>Cidade:</Text>
          <TextInput
          value={Cidade}
          onChangeText={(text) => setCidade(text)}
          placeholder="Digite sua Cidade"
          style={styles.input}
          />

        <Text>Estado:</Text>
          <TextInput
          value={Estado}
          onChangeText={(text) => setEstado(text)}
          placeholder="Digite seu Estado"
          style={styles.input}
          />
        
        <Text>Telefone:</Text>
          <TextInput
          value={Telefone}
          onChangeText={(text) => setTelefone(text)}
          placeholder="Informe seu Telefone"
          style={styles.input}
          />

        <Text>Email:</Text>
          <TextInput
          value={Email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Digite seu E-mail"
          style={styles.input}
          />

        <Text>Mensagem:</Text>
          <TextInput
          value={Mensagem}
          onChangeText={(text) => setMensagem(text)}
          placeholder="Digite sua Mensagem"
          style={styles.input}
          />

          <Button title="Adicionar receita" onPress={pickImage} />
          {ImagemPath && <Image source={{ uri: ImagemPath }} style={styles.ImagemPath} />}
          <Button title="Enviar" onPress={handleEnviar} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Receita;
