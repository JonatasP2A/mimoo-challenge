import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

function Confirmation() {
  const navigation = useNavigation();
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.description}>Identificamos{"\n"}que você consome</Text>
        <Text style={styles.brand}>Jeunesse SPA</Text>

        <Image source={require("../../assets/jeunesse.png")} style={styles.image} />

        <Text style={styles.congratulation}>Parabéns{"\n"}Você ganhou 100 pontos!</Text>
        <Text style={styles.continue}>Continue para ganhar ainda{"\n"}mais pontos</Text>

      </View>
      <RectButton style={styles.button} onPress={() => {navigation.navigate("Products")}}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </RectButton>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DFBF94"
  },

  description: {
    marginTop: 46,
    fontSize: 25,
    fontFamily: "Poppins_500Medium",
    color: "#FFFFFF",
    textAlign: "center"
  },

  brand: {
    marginTop: 8,
    fontSize: 34,
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF"
  },

  image: {
    flex: 1,
    resizeMode: "contain"
  },

  congratulation: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    color: "#3A3A3A"
  },

  continue: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    marginTop: 16,
    color: "#3A3A3A",
    marginBottom: 16
  },

  button: {
    backgroundColor: '#FFFFFF',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#00C3A3'
  }
});

export default Confirmation;