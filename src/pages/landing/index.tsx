import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function Landing() {
  return (
    <View>
      <Image source={require('../../assets/logoMimmo.png')} />

      <Text style={styles.title}>Bem vindo à Mimoo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFEFC'
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 35,
  }
})

export default Landing;