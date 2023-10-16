import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SQLite from 'react-native-sqlite-storage';
import { useEffect, useState } from "react"
import { criaTabela } from "./servicos/usuarios.js"
import { buscaUsuario } from '../servicos/usuarios.js';


const schema = yup.object({
  nome: yup.string().required("Informe seu nome."),
  email: yup.string().email("Email inválido.").required("Informe seu email."), // Entrar
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres.").required("Informe sua senha."),
})

export default () => {


  useEffect(() => {
    criaTabela()
  }, [])


  const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
    },
    resolver: yupResolver(schema)

  });
  const onSubmit = data => {
    cadastrarUsuario = (data.nome, data.email, data.senha)
    Alert.alert('Cadastro realizado com sucesso!')
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);


  return (

    <View style={styles.container}>

      <Text style={styles.titleText}>Crie sua conta</Text>


      <Text style={styles.label}>Nome</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.nome && 1,
              borderColor: errors.nome && '#ff375b'
            }]}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            /* onChangeText ={nome => setUser({...user, nome})} */
            value={value}
            placeholder='Paula Rodrigues'
          />
        )}
        name="nome"
        rules={{ required: true }}
      />
      {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}



      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.email && 1,
              borderColor: errors.email && '#ff375b'
            }]}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='seu@email.com'
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}



      <Text style={styles.label}>Senha</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.senha && 1,
              borderColor: errors.senha && '#ff375b'
            }]}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='******'
            secureTextEntry={true}
          />
        )}
        name="senha"
        rules={{ required: true }}
      />
      {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}



      <View style={styles.buttonInner}>
        <Button
          style={styles.buttonInner}
          color
          title="Cadastrar"
          onPress={handleSubmit(onSubmit)}
        />

      </View>


      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Já tenho conta"
          color
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View >
  )
};


const styles = StyleSheet.create({
  label: {
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },

  buttonInner: {
    marginTop: 40,
    color: 'white',
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 100,
    width: 150,
  },
  button: {
    marginTop: 40,
    color: 'white',
    alignSelf: 'center',
    height: 40,
    backgroundColor: '#2196F3',
    borderRadius: 100,
    width: 150,
    fontSize: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: 'white',
  },
  input: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 100,
  },
  titleText: {
    fontSize: 35,
    alignSelf: 'center',
  },
  labelError: {
    alignSelf: "flex-start",
    color: 'red',
    marginBottom: 8,
  }
});
