import { StyleSheet } from 'react-native';

const popupWindowStyles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  popupContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30
  },
  popupAvatar: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginBottom: 16,
    marginTop: 0,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textContainer: {
    marginLeft: 16,
  },
  popupText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  bottomContainer: {
    backgroundColor: '#3A86A8',
    padding: 10,
    marginTop: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  bottomCloseButton: {
    padding: 2,
  },
});

export default popupWindowStyles;