import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import SplashLogo from '../assets/images/splashLogo.png';
type SplashScreenProps = {
  navigation: StackNavigationProp<any, 'Splash'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('home'); 
    }, 5000); 

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={SplashLogo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1F2026'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  image: {
    resizeMode: 'contain', 
  },
});

export default SplashScreen;
