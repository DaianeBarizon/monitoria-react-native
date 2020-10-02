/* eslint-disable react/prop-types */
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const ItemCard = ({item}) => {
  const navigation = useNavigation();

  const handleAutorizacoesDetalhes = () => {
    requestAnimationFrame(() => {
      navigation.navigate('CarrinhoStack', item);
    });
  };

  return (
    <TouchableOpacity
      onPress={handleAutorizacoesDetalhes}
      style={styles.container}>
      <Image
        source={{
          uri: item.imagem,
        }}
        style={styles.imagem}
      />
    </TouchableOpacity>
  );
};

export default ItemCard;
