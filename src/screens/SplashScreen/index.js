import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';  

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home');
    },3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo/logo.png')} style={styles.logo} />
      <Text style={styles.text}>LAYOUTindex Demo</Text>
    </View>
  );
};

export default SplashScreen;
