import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BaseButton, RectButton } from 'react-native-gesture-handler';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';

import SkinCare from '../../components/SkinCare';
import Snacks from '../../components/Snacks';

interface Params {
  name: string;
}

function Products() { 
  const [skinCareSelected, setSkinCareSelected] = useState(true);

  const route = useRoute();
  const { name } = route.params as Params;

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Olá {name}!</Text>
        <Text style={styles.description}>Adicione mais produtos à sua lista e ganhe pontos!</Text>

        <View style={styles.points}>
          <MaterialIcons name="grade" color="#482F05" size={13} />
          <Text style={styles.pointsText}>Pontos</Text>
        </View>
        <Text style={styles.total}>200</Text>

        <View style={styles.buttons}>
          <View style={skinCareSelected ? styles.buttonSelected : styles.button}>
            <BaseButton onPress={() => setSkinCareSelected(true)}>
              <Text style={skinCareSelected ? styles.textButtonSelected : styles.textButton}>Skin Care</Text>
            </BaseButton>
          </View>
          <View style={skinCareSelected ? styles.button : styles.buttonSelected}>
            <BaseButton onPress={() => setSkinCareSelected(false)}>
              <Text style={skinCareSelected ? styles.textButton : styles.textButtonSelected}>Snacks</Text>
            </BaseButton>
          </View>
        </View>

        {skinCareSelected ? <SkinCare /> : <Snacks />}
        <RectButton onPress={() => navigation.navigate("Scan")} style={styles.addButton}>
          <Feather name="plus" size={30} color="#FFFFFF" />
        </RectButton>
      </View>

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

  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 34,
    color: '#3A3A3A',
    marginBottom: 8
  },

  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    maxWidth: 280,
    color: '#3A3A3A'
  },

  points: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },

  pointsText: {
    fontFamily: 'Poppins_500Medium',
    color: '#482F05',
    marginLeft: 8
  },

  total: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    color: '#482F05',
    marginLeft: 21
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 16
  },

  button: {
    flex: 1,
    maxWidth: 100,
    alignItems: "center"
  },

  buttonSelected: {
    flex: 1,
    maxWidth: 100,
    alignItems: "center",
    borderBottomWidth: 4,
    borderBottomColor: '#00C3A3'
  },

  textButton: {
    color: '#999999',
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold"
  },

  textButtonSelected: {
    color: '#00C3A3',
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold"
  },

  addButton: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#00C3A3',
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: Dimensions.get('window').height - 70,
    left: Dimensions.get('window').width - 90
  }
})

export default Products;