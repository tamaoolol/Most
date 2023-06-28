import React, { useState } from 'react';
import { View, Alert, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Post } from './PostDesign';


export const Profile: React.FC = () => {
  const [buttonColor, setButtonColor] = useState('blue');

  const handleButtonPress = () => {
    const newColor = buttonColor === 'blue' ? 'red' : 'blue' ;
    setButtonColor(newColor);
  };

    return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={handleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
  },
});
