// import React, { useRef, useState } from 'react';
// import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
// import { PinchGestureHandler } from 'react-native-gesture-handler';
// import { State } from 'react-native-gesture-handler';

// interface ZoomableImageProps {
//   source: { uri: string };
// }

// export const ZoomableImage: React.FC<ZoomableImageProps> = ({ source }) => {
//   const pinchRef = useRef<PinchGestureHandler>(null);
//   const baseScale = useRef(1);
//   const scale = useRef(1);
//   const lastScale = useRef(1);
//   const [isZoomed, setIsZoomed] = useState(false);

//   const onPinchGestureEvent = (event: PinchGestureHandlerGestureEvent) => {
//     if (event.nativeEvent.state === State.ACTIVE) {
//       lastScale.current = scale.current;
//       setIsZoomed(true);
//     }

//     scale.current = baseScale.current * event.nativeEvent.scale;
//   };

//   const onPinchHandlerStateChange = (event: PinchGestureHandlerGestureEvent) => {
//     if (event.nativeEvent.state === State.ACTIVE) {
//       if (scale.current < 1) {
//         scale.current = 1;
//         setIsZoomed(false);
//       }

//       baseScale.current = scale.current;
//     }
//   };

//   const toggleZoom = () => {
//     setIsZoomed(!isZoomed);
//     pinchRef.current?.setNativeProps({ scale: isZoomed ? 1 : lastScale.current });
//     scale.current = isZoomed ? 1 : lastScale.current;
//     baseScale.current = isZoomed ? 1 : lastScale.current;
//   };

//   return (
//     <PinchGestureHandler
//       ref={pinchRef}
//       onGestureEvent={onPinchGestureEvent}
//       onHandlerStateChange={onPinchHandlerStateChange}
//     >
//       <View style={styles.container}>
//         <Image source={source} style={[styles.image, { transform: [{ scale: scale.current }] }]} resizeMode="contain" />
//         <TouchableOpacity style={styles.zoomButton} onPress={toggleZoom}>
//           <Text style={styles.zoomButtonText}>{isZoomed ? 'Zoom Out' : 'Zoom In'}</Text>
//         </TouchableOpacity>
//       </View>
//     </PinchGestureHandler>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   zoomButton: {
//     position: 'absolute',
//     bottom: 16,
//     right: 16,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     borderRadius: 8,
//   },
//   zoomButtonText: {
//     color: '#fff',
//   },
// });
