import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  brands: [
    {
      name: string;
      products: [
        {
          name: string;
          image: string;
        }
      ]
    }
  ]
}

const SkinCare:React.FC<Props> = ({ brands }) => {
  return (
    <View style={styles.container}>
      {brands.map(brand => (
        <>
          <View key={brand.name} style={styles.header}>
            <Feather name="map-pin" size={20} color="#999999" />
            <Text style={styles.headerText}>{brand.name}</Text>
          </View>

          <View style={styles.products}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {brand.products.map(product => (
                <View key={product.name} style={styles.product}>
                  <Image source={{ uri: product.image }} style={styles.image} />
                </View>
              ))}
            </ScrollView>
          </View>
        </>
      ))}
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
    marginTop: 8,
    marginBottom: 8
  },

  product: {
    backgroundColor: '#CEB5AB',
    justifyContent: "space-between",
    marginRight: 8,
    width: 150,
    height: 150,
    borderRadius: 8
  },

  image: {
    resizeMode: "contain",
    flex: 1
  }
});

export default SkinCare;