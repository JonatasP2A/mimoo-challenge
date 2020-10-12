import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

function Prancheta() {
  const navigation = useNavigation();

  const [textInput, setTextInput] = useState('');

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Feather name="arrow-left" size={24} color="#00C3A3" />
        </TouchableOpacity>

        <Text style={styles.title}>Informe seu nome</Text>

        <TextInput style={styles.input} onChangeText={text => setTextInput(text)} />

      </View>
      <RectButton style={styles.button} onPress={() => {
        textInput !== '' &&
        navigation.navigate("Products", { 
          name: textInput 
        })
      }}>
        <Text style={styles.buttonText}>Continuar</Text>
      </RectButton>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36
  },

  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
    color: '#3A3A3A',
    marginTop: 60
  },

  input: {
    fontFamily: "Poppins_400Regular",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#00C3A3",
    fontSize: 22,
    color: "#3A3A3A",
    marginTop: 40
  },

  button: {
    backgroundColor: '#00C3A3',
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#FFFFFF'
  }
});

export default Prancheta;