import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5DC172',
    flex: 1,
  },
  containerTxt: {
    alignItems: 'center',
    flex: 0.8,
    flexDirection: 'row',
  },
  image: {
    height: 590,
    width: 217,
    position: 'absolute',
    right: -35,
    top: 10,
  },
  txtTitle: {
    fontFamily: 'Oleo Script',
    fontSize: 45,
    color: '#FFF',
    marginHorizontal: 20,
    width: 250,
  },
  txtSecondTitle: {
    fontSize: 78,
    color: '#C13355',
  },
  containerLogin: {
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    flex: 1,
  },
  containerInput: {
    marginHorizontal: 40,
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
});

export default styles;
