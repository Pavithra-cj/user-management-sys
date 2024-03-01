// styles.js
export const homeScreenStyles = {
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 25,
    marginTop: 45,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 7,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  loadMoreButton: {
    padding: 10,
    alignItems: 'center',
  },
  loadMoreText: {
    color: 'blue',
  },
};
