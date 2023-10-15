// Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
  };

  return (
    <View>
      <Text> aqui vai a logica</Text>
    </View>
  );
};



export default Login;
