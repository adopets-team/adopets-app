import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Linking, Button } from 'react-native';

export default function Login() {
    const [user, onChangeUser] = React.useState(user);
    const [passwd, onChangePasswd] = React.useState(passwd);
  
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/brand/main.png')}
            />
            <Text>Bem vindo, por favor logue para entrar.</Text>
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
            <Text>Esqueceu sua senha?  
                <Text 
                    style={styles.link}
                    onPress={() => Linking.openURL('https://google.com.br')}
                > 
                Redifina</Text>
            </Text>
            <Button
                title='Login'
                style={styles.button}

            />
            <Text>Não possui conta? 
                <Text 
                    style={styles.link}
                    onPress={() => Linking.openURL('https://google.com.br')}
                > 
                Cadastra-se</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    margin: 20, 
  },
  image: {
    width: 'auto',
    height: 200,
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
    color: '#74B9FF'
  },
  button: {
    color: '#74B9FF',
    borderWidth: 1,
    borderColor: '#74B9FF',
    borderRadius: 15,
  }
});
