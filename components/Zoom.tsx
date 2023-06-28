import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, StyleSheet, Dimensions, Text } from 'react-native';

interface ZoomableImageProps {
  source: { uri: string };
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({ source }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity onPress={toggleModal}>
      <Modal visible={isModalVisible} transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image source={source} style={styles.image} resizeMode="contain" />
          </View>
        </View>
      </Modal>
      <Image source={source} style={styles.thumbnailImage} resizeMode="cover" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbnailImage: {
    width: 200,
    height: 200,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
