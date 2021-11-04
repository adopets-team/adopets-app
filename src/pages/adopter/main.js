import React, { useState } from 'react';
import styles from '../../assets/styles'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ImageBackground, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function mainAdopter() {
    return(
        <View style={style.container}>
            <ImageBackground source={require('../../assets/image/cachorro.jpeg')} resizeMode="cover" style={style.image}>
                <View style={style.info}> 
                    <Text style={style.title}>Amy, 2 anos</Text>
                    <TouchableOpacity>
                        <FontAwesome
                            name='info-circle'
                            size={20}
                            color='#ffffff'
                            />
                    </TouchableOpacity>
                </View>
                <Text style={style.gender}>Menina</Text>
                <View style={style.actions}> 
                    <TouchableOpacity>
                        <FontAwesome
                            name='paw'
                            size={38}
                            color='#FE5047'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome
                            name='star'
                            size={38}
                            color='#FFFEAE'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome
                            name='paw'
                            size={38}
                            color='#74B9FF'
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 365,
        height: 700,
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    gender: {
        fontSize: 15,
        color: '#ffffff',
        paddingBottom: 23,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff'
    },
});
