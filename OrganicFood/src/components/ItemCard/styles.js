import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerItemCard: {
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#6F6F6F',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  imagem: {
    height: 100,
    width: 120,
  },
});

export default styles;
