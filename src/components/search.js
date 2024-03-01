import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import MyButton from './button';
import PopupWindow from './PopupWindow';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [popupData, setPopupData] = useState(null);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${searchText}`);
      const data = await response.json();

      if (data && data.data) {
        setPopupData(data.data);
      } else {
        Alert.alert('404: User does not exist.');
        setPopupData(null);
      }
    } catch (error) {
      Alert.alert('Error fetching user details:', error);
      setPopupData(null);
    }
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="User ID"
        keyboardType="numeric"
        value={searchText}
        onChangeText={handleSearchTextChange}
      />
      <MyButton label="Search" onPress={handleSearch} />

      <PopupWindow isVisible={!!popupData} data={popupData} onClose={handleClosePopup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-around',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});

export default SearchComponent;
