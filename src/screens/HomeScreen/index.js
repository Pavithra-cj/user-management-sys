import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeScreenStyles as styles } from './styles';
import PopupWindow from '../../components/PopupWindow';
import AppHeader from '../../components/header';
import SearchComponent from '../../components/search';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const json = await response.json();

      setData((prevData) => [...prevData, ...json.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openPopup = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openPopup(item)}>
    <View style={styles.card}>
      <View>
        <View style={styles.userInfoContainer}>
          <Image
            source={{ uri: item.avatar }}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.boldText}>ID: <Text style={styles.normalText}>{item.id}</Text></Text>
            <Text style={styles.boldText}>Name: <Text style={styles.normalText}>{item.first_name}</Text></Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <AppHeader/>
    <View style={styles.searchView}>
      <View style={styles.searchBarContainer}>
        <SearchComponent />
      </View>
    </View>
      <Text style={styles.title}>Available Users</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity onPress={loadMoreData} style={styles.loadMoreButton}>
        <Text style={styles.loadMoreText}>Load More</Text>
      </TouchableOpacity>
      <PopupWindow isVisible={selectedUser !== null} data={selectedUser || {}} onClose={closePopup} />
    </SafeAreaView>
  );
};

export default HomeScreen;
