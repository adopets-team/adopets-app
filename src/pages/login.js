import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Linking, TouchableOpacity } from 'react-native';

export default function Login() {
    const [user, onChangeUser] = React.useState('');
    const [passwd, onChangePasswd] = React.useState('');
  
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/brand/main.png')}
            />
          <View style={styles.infos}>
            <Text style={styles.title}>Bem vindo, por favor logue para entrar.</Text>
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
            />
            <View style={styles.infos}>
              <Text style={styles.textPasswd}>Esqueceu sua senha?  
                  <Text 
                      style={styles.link}
                      onPress={() => Linking.openURL('https://google.com.br')}
                  > 
                  Redifina</Text>
              </Text>
              <TouchableOpacity 
                style={styles.circledButton}
                // onPress={}
              >
                <Text style={styles.textOnButton}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Não possui conta?
                  <Text 
                      style={styles.link}
                      onPress={() => Linking.openURL('https://google.com.br')}
                  > 
                  Cadastra-se</Text>
              </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
    margin: 20, 
  },
  image: {
    width: 'auto',
    height: 150,
    marginBottom: 8,
  },
  input: {
    height: 41,
    margin: 10,
    borderWidth: 1,
    borderColor: '#D9DBDB',
    borderRadius: 15,
    padding: 10,
  },
  link: {
    color: '#74B9FF',
  },
  circledButton: {
    height: 41,
    width: 143,
    borderRadius: 15,
    backgroundColor:'#74B9FF',
    justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
    margin: 10,
  },
  textPasswd: {
    fontSize: 15,
  },
  title: {
    fontSize: 17,
  },
  textOnButton: {
    color: '#FFFFFF',
    fontSize: 16
  },
  infos: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});
