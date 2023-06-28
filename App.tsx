import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from './components/CartSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './components/Store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from './components/Main';
//import { ShopCart } from './ShoppingCart';//
import { Profile } from './components/Profile';
import { ProductInfo } from './components/ProductInfo';
import { CartScreen } from './components/ShoppingCart';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
    return (
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
    );
  };

export default App;
   