import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from './Main';
//import { ShopCart } from './ShoppingCart';//
import { Profile } from './Profile';
import { ProductInfo } from './ProductInfo';
import { CartScreen } from './ShoppingCart';
import { LoadingScreen } from './LoadingScreen';
import { Provider } from 'react-redux';
import { store } from './Store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigation: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);

      if (isLoading) {
        return <LoadingScreen />;
      }
    
      return (
        <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Tab' component={BottomTabNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="ProductInfo" component={ProductInfo} />
        </Stack.Navigator>
        </Provider>
      );
    };
    

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = 'Main' component = {MainScreen}/>
            <Tab.Screen name = 'Shopping Cart' component = {CartScreen}/>
            <Tab.Screen name = 'Profile' component = {Profile}/>
        </Tab.Navigator>
    )
}

// export const NavigationMain = () => { 
//   return (
//       <Provider store={store}>
//       <NavigationContainer>
//           <Stack.Navigator>
//               <Stack.Screen name='Tab' component={BottomTabNavigator} options={{headerShown: false}}/>
//               <Stack.Screen name='ProductInfo' component={ProductInfo}/>
//           </Stack.Navigator>
//       </NavigationContainer>
//       </Provider>
//   );
// };