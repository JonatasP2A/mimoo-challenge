import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SkinCare:React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="map-pin" size={20} color="#999999" />
          <Text style={styles.headerText}>Nivea</Text>
        </View>

        <View style={styles.products}>
          <View style={styles.product}>
            <Image source={require('../../assets/nivea_kids.png')} style={styles.image} />
          </View>
          <View style={styles.product}>
            <Image source={require('../../assets/nivea.png')} style={styles.image} />
          </View>
        </View>

        <View style={styles.header}>
          <Feather name="map-pin" size={20} color="#999999" />
          <Text style={styles.headerText}>Jeunesse</Text>
        </View>

        <View style={styles.products}>
          <View style={styles.product}>
            <Image source={require('../../assets/jeunesse.png')} style={styles.image} />
          </View>
          <View style={styles.product}>
            <Image source={require('../../assets/jeunesse3.png')} style={styles.image} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    flexDirection: "row",
    alignItems: "center"
  },

  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#999999'
  },

  products: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 8
  },

  product: {
    backgroundColor: '#CEB5AB',
    width: 160,
    height: 160,
    borderRadius: 8
  },

  image: {
    resizeMode: "contain",
    flex: 1
  }
});

export default SkinCare;