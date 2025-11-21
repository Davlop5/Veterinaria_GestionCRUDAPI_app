import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddProduct({ navigation }) {
  const [product, setProduct] = useState('');

  const saveProduct = async () => {
    if (product.trim() === '') return;

    try {
      // leer lista actual
      const stored = await AsyncStorage.getItem('products');
      const products = stored ? JSON.parse(stored) : [];

      // agregar nuevo
      const newList = [...products, product];
      await AsyncStorage.setItem('products', JSON.stringify(newList));

      setProduct('');
      navigation.navigate('ProductList'); // ir a lista
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={product}
        onChangeText={setProduct}
      />
      <Button title="Guardar" onPress={saveProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
});
