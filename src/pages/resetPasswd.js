import React, { useState } from 'react';
import styles from '../assets/styles'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function ResetPasswd() {
    const [email, onChangeEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState('');
    
    const navigation = useNavigation();

    function validField() {
        if (email !== ''){
            setModalVisible(true);
            setMessage('');
        } else {
            setMessage('Digite um email válido!');
        }
    }
    return(
        <View style={style.container}>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
            >   
                <View style={style.centered}>
                    <View style={style.modal}>
                        <Text style={style.title}> Código enviado para email </Text> 
                        <TouchableOpacity 
                            style={styles.circledButton}
                            onPress={() => {
                            navigation.navigate('Login')}}
                        >
                            <Text style={styles.textOnButton}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={style.title}> Encontre a sua conta </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Digite seu email"
            />
            <Text style={style.message}>{message}</Text>
            <View style={style.info}>
                <TouchableOpacity 
                    style={styles.circledButton}
                    onPress={() => validField()}
                >
                    <Text style={styles.textOnButton}>Enviar código</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 90,
    },
    info:{
        alignItems: 'center'
    },
    title: {
        marginLeft: 10,
        fontSize: 17,
    },
    message: {
        marginLeft: 10,
        fontSize: 14,
        color: '#E9514C',
    },
});
