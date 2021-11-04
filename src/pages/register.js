import React, { useState }from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../assets/styles'
import RegisterAdopter from '../components/adopter/register';
import RegisterNGO from '../components/NGO/register';

export default function Register() {
    const [type, setType] = useState('');

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
                </ScrollView>
            </View>
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
    }
});