import { StyleSheet, Text, View } from 'react-native';

export default function ProductItem({ name }) {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});
