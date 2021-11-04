import React, { useState }from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import styles from '../../assets/styles'

export default function RegisterAdopter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [passwdConfirm, setPasswdConfirm] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [occupation, setOccupation] = useState('');
    const [description, setDescription] = useState('');

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Nome"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPasswd}
                value={passwd}
                placeholder="Senha"
                keyboardType="default"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPasswdConfirm}
                value={passwdConfirm}
                placeholder="Confirmar Senha"
                keyboardType="default"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setAddress}
                value={address}
                placeholder="Endereço"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setTelephone}
                value={telephone}
                placeholder="Telefone"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setBirthDay}
                value={birthDay}
                placeholder="Data de Nascimento"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setOccupation}
                value={occupation}
                placeholder="Profissão"
                keyboardType="default"
            />
            <TextInput
                style={style.textInput}
                onChangeText={setDescription}
                value={description}
                placeholder="Conte um pouco sobre você para nós"
                keyboardType="default"
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
        padding: 10,
    }
});