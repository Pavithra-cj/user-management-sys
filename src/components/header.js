import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>User Information</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3A86A8',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppHeader;
