import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const handleOnPressHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Home" onPress={handleOnPressHome} />
    </View>
  );
};

export default Login;
