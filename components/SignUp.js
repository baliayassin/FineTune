import React,{ useEffect, useState, Component} from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import GoogleAuth from './GoogleAuth'
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';





export default function SignUp()  {

    //const [googleSign, setGoogleSign] = useState(null)
    
    
    //const signInhandler= ()=>{
       //navigation.navigate('GoogleAuth')
    //}

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FineTune</Text>
            <Text style={styles.header}>The celebration of creating (music)</Text>
            <Text style={styles.signUp}>Sign Up</Text>
            <TouchableOpacity>
                <Entypo style={styles.google} name="google-" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <EvilIcons style={styles.facebook} name="sc-facebook"
                    size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 80

    },
    title: {
        fontSize: 30,
        color: '#fd885c',
        fontWeight: 'bold',
        marginTop: 0,
        justifyContent: 'center',
        textAlign: 'center',

    },
    header: {
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30


    },

    signUp: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    google: {
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    facebook: {
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }

})
