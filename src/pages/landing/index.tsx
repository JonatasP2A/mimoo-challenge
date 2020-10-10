import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logoMimmo.png')} />

      <Text style={styles.title}>Bem vindo à Mimoo!</Text>
      <Text style={styles.subtitle}>Alegre. Divertido. Relevante. Você vai adorar!</Text>
      <Text style={styles.description}>Nos conte um pouco sobre você e ganhe pontos!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    backgroundColor: '#FFFEFC'
  },

  title: {
    // fontFamily: 'Poppins_700Bold',
    fontSize: 35,
    color: '#00C3A3'
  },

  subtitle: {
    // fontFamily: 'Poppins_600SemiBold',
    fontSize: 35,
    color: '#00C3A3'
  },

  description: {
    // fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#3A3A3A'
  }
})

export default Landing;