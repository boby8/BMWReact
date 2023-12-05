import React, {useEffect, useRef} from 'react';
import {View, Image, Animated, Easing} from 'react-native';
import Logo from '../assets/images/logo.png';

const RotateImage: React.FC = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.timing(rotationValue, {
      toValue: 1,
      duration: 3000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false, // Set to true if possible
    });

    rotateAnimation.start(() => {});

    return () => {};
  }, [rotationValue]);

  const spin = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      style={{
        transform: [{rotate: spin}],
        width: 40,
        height: 40,
        borderRadius: 30,
      }}
      source={Logo}
    />
  );
};

export default RotateImage;
