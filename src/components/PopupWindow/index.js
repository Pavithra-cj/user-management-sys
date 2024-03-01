import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { popupWindowStyles as styles } from './styles';

const PopupWindow = ({ isVisible, data, onClose }) => {
  if (!isVisible) return null;

  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.popupContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <View style={styles.popupContent}>
          <Image
            source={{ uri: data.avatar }}
            style={styles.popupAvatar}
          />
          <Text>ID: {data.id}</Text>
          <Text>Name: {`${data.first_name} ${data.last_name}`}</Text>
          <Text>Email: {data.email}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default PopupWindow;
