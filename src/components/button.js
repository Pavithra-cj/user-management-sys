import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ label, onPress, isAfterButton }) => {
  const containerStyle = isAfterButton ? styles.afterButton : styles.gradButton;

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradButton: {
    margin: 2,
    padding: 10,
    backgroundColor: '#3A86A8',
    alignItems: 'center',
    borderBottomRightRadius: 15,
    marginLeft: 80,
    marginRight: 80
  },
  afterButton: {
    margin: 2,
    padding: 10,
    backgroundColor: '#3A86A8',
    borderBottomRightRadius: 15,
    marginLeft: 80,
    marginRight: 80,
    alignItems: 'center',
    position: 'relative',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
});

export default MyButton;
