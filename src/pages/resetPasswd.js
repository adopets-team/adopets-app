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
                <View style={styles.centered}>
                    <View style={styles.modal}>
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
            <Text style={styles.errorMessage}>{message}</Text>
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
});
