/* eslint-disable react/prop-types */
import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
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
    <TouchableOpacity onPress={handleAutorizacoesDetalhes}>
      <View style={styles.containerItemCard}>
        <View style={styles.row}>
          <View style={styles.txtContainer}>
            <Text style={[styles.title]}>{item.nome}</Text>
            <Text style={[styles.title]}>{item.quantidade}</Text>
            <Text style={[styles.title]}>{item.preco}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: item.imagem,
              }}
              style={styles.imagem}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
