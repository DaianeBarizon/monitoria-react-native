/* eslint-disable react/prop-types */
import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const Input = ({value, placeholder, setValue}) => {
  console.log(value, placeholder);
  return (
    <TextInput
      style={styles.input}
      onChangeText={(text) => setValue(text)}
      placeholder={placeholder}
      value={value}
      placeholderTextColor="#6F6F6F"
    />
  );
};

export default Input;
