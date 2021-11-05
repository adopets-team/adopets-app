import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function navAdopter() {
    return(
        <View style={style.container}>
            <TouchableOpacity>
                <FontAwesome
                    name='search'
                    size={35}
                    color='#DCDCDC'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome
                    name='star'
                    size={35}
                    color='#DCDCDC'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome
                    name='heart'
                    size={35}
                    color='#DCDCDC'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome
                    name='comments'
                    size={35}
                    color='#DCDCDC'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome
                    name='user'
                    size={35}
                    color='#DCDCDC'
                />
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        borderStartColor: '#D9DBDB',
        borderStartWidth: 1,
    }
});
