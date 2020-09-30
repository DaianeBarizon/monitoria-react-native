import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Button = ({title, style, textStyle, onPress, image}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
