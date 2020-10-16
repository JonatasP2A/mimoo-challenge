import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

interface Response {
  name: string;
  image: string;
  brand: string;
}

function Scan() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [barCode, setBarCode] = useState('000000000000000');
  const [product, setProduct] = useState<Response>();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>
  }

  function handleBarCodeScanned({ data }: any) {
    setScanned(true);
    setBarCode(data);

    api.get(`products/${barCode}`).then(response => {
      if (response.status === 200) {
        Alert.alert('Produto encontrado');
        setProduct(response.data);
      } else {
        Alert.alert('Produto não encontrado');
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Feather name="arrow-left" size={23} color="#00C3A3" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Escanear produto</Text>
        <View />
      </View>

      <View style={styles.scanContainer}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.scan}>
          <Text style={styles.scanText}>Escaneando o código{"\n"}de barras</Text>
        </BarCodeScanner>
      </View>

      <View style={styles.code}>
        <Text style={styles.codeText}>Número do código de barras:</Text>
        <Text style={styles.codeNumber}>{barCode}</Text>
      </View>

      <RectButton style={styles.button} onPress={() => {navigation.navigate("Confirmation", { name: product?.name, image: product?.image })}}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#232323"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#FFFFFF"
  },

  headerText: {
    color: "#3A3A3A",
    fontSize: 23,
    opacity: 0.47
  },

  scanContainer: {
    opacity: 0.57,
    flex: 1
  },

  scan: {
    flex: 1,
    backgroundColor: "#232323",
    opacity: 0.57
  },

  scanText: {
    fontSize: 24,
    color: "#FFFFFF",
    flex: 1,
    textAlign: "center",
    marginTop: 52
  },

  code: {
    height: 100,
    justifyContent: "center",
    padding: 36,
    backgroundColor: "#BFA394",
    opacity: 0.57
  },

  codeText: {
    fontSize: 16,
    color: "#FFFFFF"
  },

  codeNumber: {
    fontSize: 26,
    color: "#FFFFFF"
  },

  button: {
    backgroundColor: "#FFFFFF",
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontSize: 20,
    color: "#00C3A3",
    fontWeight: "700"
  }
})

export default Scan;