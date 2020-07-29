import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import FacebookAuth from './components/FacebookAuth'

export default function App() {
  return (
    <View style={styles.container}>

      <FacebookAuth />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
