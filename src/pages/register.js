import React, { useState }from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from '../assets/styles'
import RegisterAdopter from '../components/adopter/register';
import RegisterNGO from '../components/NGO/register';

export default function Register() {
    const [type, setType] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    function renderFields() {
        if ( type !== '' ) {
            if ( type === 'adopter') {
                return <RegisterAdopter />
            } else {
                if ( type === 'NGO') {
                    return <RegisterNGO />
                }
            }
        }
    }

    return(
        <View style={style.container}>
            <View>
                <Text style={style.title}>Oii! Para começar como você se identifica?</Text>
                <Picker 
                    style={style.picker}
                    selectedValue={type}
                    onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                >
                    <Picker.Item style={style.pickerItem} label="Selecione uma opção" value="" />
                    <Picker.Item style={style.pickerItem} label="Adotante" value="adopter" />
                    <Picker.Item style={style.pickerItem} label="ONG" value="NGO" />
                </Picker>
                <ScrollView>
                    { renderFields() }
                    <View style={style.fields}>
                        <TouchableOpacity 
                            style={styles.circledButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.textOnButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
            >   
                <View style={styles.centered}>
                    <View style={styles.modal}>
                        <Text style={style.titleModal}> Seu cadastro está em análise assim que aprovado um email será enviado!</Text> 
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
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    picker: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#74B9FF'
    },
    pickerItem: {
        fontSize: 15,
    },
    fields: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleModal: {
        marginLeft: 10,
        fontSize: 17,
    },
});