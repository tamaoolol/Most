import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, selectCartItems } from './CartSlice';

export const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = { id: '1', name: 'Nigga', price: 1 };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <View>
      <Button title="Add Item" onPress={handleAddItem} />
      <Button title="Clear Cart" onPress={handleClearCart} />
      {cartItems.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
          <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
        </View>
      ))}
    </View>
  );
};