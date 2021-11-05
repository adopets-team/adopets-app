import React, { useState }from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import styles from '../../assets/styles'

export default function RegisterNGO() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [passwdConfirm, setPasswdConfirm] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [donate, setDonate] = useState('');
    const [description, setDescription] = useState('');

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Nome Fantasia"
                blurOnSubmit={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                blurOnSubmit={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPasswd}
                value={passwd}
                placeholder="Senha"
                blurOnSubmit={true}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPasswdConfirm}
                value={passwdConfirm}
                placeholder="Confirmar Senha"
                blurOnSubmit={true}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setAddress}
                value={address}
                placeholder="Endereço"
                blurOnSubmit={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setTelephone}
                value={telephone}
                placeholder="Telefone"
                keyboardType="numeric"
                blurOnSubmit={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setCNPJ}
                value={cnpj}
                placeholder="CNPJ ou CEF"
                keyboardType="numeric"
                blurOnSubmit={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setDonate}
                value={donate}
                placeholder="Meios de doação"
                blurOnSubmit={true}
            />
            <TextInput
                style={style.textInput}
                onChangeText={setDescription}
                value={description}
                placeholder="Conte um pouco sobre você para nós"
                blurOnSubmit={true}
                multiline={true}
                numberOfLines={8}
            />
        </View>
    );
}

const style = StyleSheet.create({
    textInput: {
        height: 160,
        margin: 10,
        borderWidth: 1,
        borderColor: '#D9DBDB',
        borderRadius: 15,
        paddingLeft: 10,
    }
});