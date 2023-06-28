import React from 'react';
import axios from 'axios';
import { Post } from './PostDesign';
import {
  View,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';


export const MainScreen = ({navigation}: {navigation: any}) => {

  const [product, setProduct] = React.useState<any>([]);
 
  React.useEffect( 
    () => {
      axios.get('https://dummyjson.com/product/')
      .then(({data}) => {
        setProduct(data.products);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Unable data');
      });
    }, 
  []);

  return (
    <View>
      <FlatList
        data = {product}
        renderItem = {({ item }) => 
          <TouchableOpacity onPress={()=> navigation.navigate('ProductInfo', {id: item.id})}>
            <Post title={item.title} desc={item.description} img={item.thumbnail} />
          </TouchableOpacity>
        }
      />
    </View>
  );
}