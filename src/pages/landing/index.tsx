import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

function Landing() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/logoMimmo.png')} style={styles.logo} />

        <Text style={styles.title}>Bem vindo à Mimoo!</Text>
        <Text style={styles.subtitle}>Alegre. Divertido. Relevante.</Text>
        <Text style={styles.subtitle}>Você vai adorar!</Text>
        <Text style={styles.description}>Nos conte um pouco sobre você e ganhe pontos!</Text>

        <Image source={require('../../assets/sair_da_fila_de_espera.png')} style={styles.image} />

        
      </View>

      <RectButton style={styles.button} onPress={() => {navigation.navigate("Prancheta")}}>
        <Text style={styles.buttonText}>Começar</Text>
      </RectButton>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 36,
    backgroundColor: '#FFFEFC'
  },

  logo: {
    marginLeft: -12
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 35,
    marginVertical: 20,
    color: '#00C3A3'
  },

  subtitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#00C3A3'
  },

  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    marginTop: 20,
    color: '#3A3A3A'
  },

  image: {
    flex: 1,
    resizeMode: "contain"
  },

  button: {
    backgroundColor: '#00C3A3',
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#FFFFFF'
  }
})

export default Landing;