import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  // useEffect 1: cargar productos al montar la pantalla
  useEffect(() => {
    const loadProducts = async () => {
      const stored = await AsyncStorage.getItem('products');
      if (stored) {
        setProducts(JSON.parse(stored));
      }
    };
    loadProducts();
  }, []);

  // useEffect 2: log de cambios (útil para depuración)
  useEffect(() => {
    console.log("Productos actuales:", products);
  }, [products]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Productos</Text>
      {products.length === 0 ? (
        <Text>No hay productos guardados</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});
