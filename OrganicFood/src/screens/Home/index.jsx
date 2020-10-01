/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button/Button';

const HomeStack = ({navigation}) => {
  const handleOnPressEntrarHome = () => {
    navigation.navigate('CarrinhoStack');
  };

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Entrar"
        onPress={handleOnPressEntrarHome}
        style={{backgroundColor: '#C13355'}}
      />
    </View>
  );
};

export default HomeStack;
