import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos pantallas
import AddProduct from './src/screens/AddProduct';
import ProductList from './src/screens/ProductList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddProduct">
        <Stack.Screen 
          name="AddProduct" 
          component={AddProduct} 
          options={{ title: 'Agregar Producto' }} 
        />
        <Stack.Screen 
          name="ProductList" 
          component={ProductList} 
          options={{ title: 'Lista de Productos' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
