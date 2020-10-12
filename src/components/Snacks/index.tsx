import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Snacks:React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="map-pin" size={20} color="#999999" />
        <Text style={styles.headerText}>Nestlé</Text>
      </View>

      <View style={styles.products}>
        <View style={styles.product}>
          <Image source={require('../../assets/negresco.png')} />
        </View>
        <View style={styles.product}>
          <Image source={require('../../assets/passatempo.png')} style={styles.image} />
        </View>
      </View>
    </View>
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
    marginTop: 8
  },

  product: {
    width: 160,
    height: 160,
    backgroundColor: '#ABC3CE',
    borderRadius: 8
  },

  image: {
    flex: 1,
    resizeMode: "contain"
  }
});

export default Snacks;