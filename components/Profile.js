import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Profile() {


    const profile = require('../assets/Profile.png')
    return (


        <View style={styles.container}>
            <Image source={profile} style={styles.Image} />
            <Text style={styles.name}> kanye west</Text>
            <View style={styles.headPhones}>
                <Feather style={styles.headPhones_parent} name="headphones" size={24} color="black" />
                <Text style={styles.username}>kanye_west</Text>

            </View>
            <View>
                <Text style={styles.text} >
                    Should the royal harden hum behind the approval?
                    The radio arrives in the surname. A mass stops next to
                    a passive coverage. The uneasy joy eyes the automated vicar.
                    The baking lecturer dreads its harsh release. Why does the
                    flood undergo a folded gut 
                 </Text>
            </View>
            <View style={styles.tools}>
                <MaterialCommunityIcons style={styles.microphone} name="microphone-variant" size={24} color="black" />
                <MaterialCommunityIcons name="piano" size={24} color="black" />
            </View>


        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 60

    },

    image: {

        width: 100,
        height: 100,

    },
    name: {

        alignItems: 'center',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        textTransform: 'capitalize',
        color: 'black'
    },
    username: {
        color: '#fd936b',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10


    },
    headPhones: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headPhones_parent: {
        marginLeft: 0,
        marginRight: 10,
        marginTop: 7

    },
    text: {
        marginBottom: '70%',
        marginLeft: 20,
        marginRight: 20
    },
    tools: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    microphone:{
    marginBottom:10,
    marginRight:10,
    
    }

})
