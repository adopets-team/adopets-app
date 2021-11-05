import React, { useState } from 'react';
import styles from '../assets/styles'
import { StyleSheet, Text, View, Image, TextInput, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function Login() {
  const [user, onChangeUser] = useState('');
  const [passwd, onChangePasswd] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  
  const navigation = useNavigation();

  function validLogin() {
    if (user !== '' && passwd !== '') {
      if (user.toLowerCase() === 'ong@admin.com' && passwd === 'admin') {
        setType('ngo')
        setMessage('');
      } else {
        if (user.toLowerCase() === 'adotante@admin.com' && passwd === 'admin') {
          setType('adopter')
          setMessage('');
        }
      }
      redirect();
    } else {
      setMessage('Email ou senha inválidos.');
    }
  }

  function redirect(){
    if (type === 'adopter') {
      navigation.navigate('MainPageAdopter')
    } else {
      if (type === 'ngo') {
        navigation.navigate('MainPageNGO')
      }
    }
  }
  return (
      <View style={styles.container}>
          <Image
              style={style.image}
              source={require('../assets/brand/main.png')}
          />
        <View style={style.infos}>
          <Text style={style.title}>Bem vindo, por favor logue para entrar.</Text>
        </View>
          <TextInput
              style={styles.input}
              onChangeText={onChangeUser}
              value={user}
              placeholder="Email"
              keyboardType="default"
          />
          <TextInput
              style={styles.input}
              onChangeText={onChangePasswd}
              value={passwd}
              placeholder="Senha"
              keyboardType="default"
              secureTextEntry={true}
          />
          <View style={style.infos}>
            <Text style={style.link} onPress={() => navigation.navigate('ResetPasswd')}>Esqueceu sua senha? </Text>
            <Text style={styles.errorMessage}>{message}</Text>
            <TouchableOpacity 
              style={styles.circledButton}
              onPress={() => validLogin()}
            >
              <Text style={styles.textOnButton}>Login</Text>
            </TouchableOpacity>
            <Text style={style.title}>Não possui conta?
                <Text 
                    style={style.link}
                    onPress={() => navigation.navigate('Register')}
                > 
                Cadastra-se</Text>
            </Text>
          </View>
      </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: 'auto',
    height: 150,
    marginBottom: 8,
  },
  link: {
    color: '#74B9FF',
    fontSize: 15,
  },
  textPasswd: {
    fontSize: 15,
  },
  title: {
    fontSize: 17,
  },
  infos: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});
