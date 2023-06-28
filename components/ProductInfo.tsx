import React from 'react';
import axios from 'axios';
import {
  View,
  Alert,
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView
  } from 'react-native';
import { AddToCartButton } from './ProductButton';
import { ZoomableImage } from './Zoom';

export const ProductInfo = ({route}:{route:any}) => {


  console.log('route');
  console.log(route);
  const id = route.params.id;
  const [product, setProduct] = React.useState<any>([]);

  console.log('id');
  console.log(id);

  React.useEffect( 
    () => {
      axios.get('https://dummyjson.com/product/' + id)
      .then(({data}) => {
        setProduct(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Unable data');
      });
    }, 
  []);

  const handleAddToCart = () => {
  };

  return (
    <View style = {styles.container}>
      {/* <Image source = {{uri: product.thumbnail}}
        style = {styles.image}/> */}
      <ScrollView horizontal>
      {product.images?.map ((item, index) => (
        <View key={index} style={styles.imageContainer}>
          <ZoomableImage source={{ uri: item }}/>
        </View>
      ))}
    </ScrollView>
      <Text style = {styles.title}>{product.title}</Text>
      <Text style = {styles.desc}> Categoty: {product.category}</Text>
      <Text style = {styles.desc}> Brand: {product.brand}</Text>
      <Text style = {styles.desc}> {product.description}</Text>
      <Text> Price: {product.price}</Text>
      <Text> Rating: {product.rating}</Text>
      <Text> Stock: {product.stock}</Text>
      <AddToCartButton onPress={handleAddToCart} />
    </View>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  container: {
    // flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  desc: {
    flex: 1,
    justifyContent: 'center',
    width: 250,
  }
});