import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5DC172',
    flex: 1,
  },
  txtTitle: {
    fontFamily: 'Oleo Script',
    fontSize: 50,
    color: '#FFF',
  },
  primaryPart: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    color: '#6F6F6F',
  },
  secondPart: {
    color: '#C13355',
    fontWeight: 'bold',
  },
  containerTxt: {alignItems: 'center', marginVertical: 20},
  containerLogin: {backgroundColor: '#FFF', flex: 1},
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginHorizontal: 15,
  },
  containerLogo: {
    alignItems: 'center',
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
