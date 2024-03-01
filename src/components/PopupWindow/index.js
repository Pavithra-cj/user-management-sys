    import React from 'react';
    import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
    import styles from './styles';
    import MyButton from '../button'; 

    const PopupWindow = ({ isVisible, data, onClose }) => {
    return (
        <Modal transparent={true} animationType="slide" visible={isVisible}>
      {isVisible && (
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: data.avatar }} style={styles.popupAvatar} />
              <View style={styles.textContainer}>
                <Text style={styles.popupText}>
                  <Text style={styles.boldText}>First Name:</Text> {data.first_name}
                </Text>
                <Text style={styles.popupText}>
                  <Text style={styles.boldText}>Last Name:</Text> {data.last_name}
                </Text>
                <Text style={styles.popupText}>
                  <Text style={styles.boldText}>Email:</Text> {data.email}
                </Text>
              </View>
            </View>
            <MyButton label="Close" onPress={onClose} />
          </View>
        </View>
      )}
    </Modal>
    );
    };

    export default PopupWindow;
