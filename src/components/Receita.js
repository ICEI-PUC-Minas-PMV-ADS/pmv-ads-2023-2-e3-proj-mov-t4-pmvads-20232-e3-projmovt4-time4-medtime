import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import * as ImagePicker from 'expo-image-picker';
import { getReceita, insertReceita } from './Services/ReceitaServicesDB';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

const Receita = ({ navigation }) => {
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
  
  const IsFocused = useIsFocused();
  const [Receita, setReceita] = useState([]);

  useEffect(() => {
      getReceita().then((dados)=>{
        setReceita(dados);
        

      });

      navegation.goBack();

    },[]);
  

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
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Receita</Text>
        <View style={styles.form}>
          {/* ... seus campos de entrada */}
          <Button title="Adicionar imagem" onPress={pickImage} />
          {ImagemPath && <Image source={{ uri: ImagemPath }} style={styles.ImagemPath} />}
          <Button title="Enviar" onPress={handleEnviar} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Receita;