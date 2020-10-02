/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import ItemCard from '../../components/ItemCard/ItemCard';
import ItemFood from '../../components/ItemFood/ItemFood';

import styles from './styles';

const FOOD = [
  {
    id: '1',
    nome: 'Frutas',
    imagem:
      'https://hortifrutigranjeiros.com.br/wp-content/uploads/2015/06/laranja.jpg',
  },
  {
    id: '2',
    nome: 'Legumes',
    imagem:
      'https://www.hortifrutiorganico.com.br/153-large_default/cenoura-organica-com-rama-maco.jpg',
  },
  {
    id: '3',
    nome: 'Verduras',
    imagem:
      'https://cd.shoppub.com.br/cenourao/media/cache/3a/b9/3ab9fff3bcda7f8978a0b6b1f529e768.jpg',
  },
  {
    id: '4',
    nome: 'Outros',
    imagem:
      'https://www.maisquitanda.com.br/image/cache/1-verduras-legumes/Cogumelo-Portobello_800x600-800x800.jpg',
  },
];

const FRUTAS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nome: 'Laranja',
    quantidade: '1kg',
    preco: '$3,00',
    imagem:
      'https://hortifrutigranjeiros.com.br/wp-content/uploads/2015/06/laranja.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nome: 'Morango',
    quantidade: '1 Caixa',
    preco: '$1,00',
    imagem:
      'https://images.squarespace-cdn.com/content/v1/5b8edfa12714e508f756f481/1538676993194-2GX4EPL3XZ83FEFGA5GY/ke17ZwdGBToddI8pDm48kOmB91umL7L-UCpRVHAKQ-JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyWWhWiKGuyssEeahuYpJnVAjVSzf_bOdNN-WQlniUYnU3_QVTJrvDi5tm5u56ImXE/morango.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nome: 'Ameixa',
    quantidade: '1kg',
    preco: '$1,80',
    imagem:
      'https://www.infoescola.com/wp-content/uploads/2010/08/ameixa-fruta_645293734-1.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    nome: 'Kiwi',
    quantidade: '1kg',
    preco: '$3,80',
    imagem:
      'https://hiperideal.vteximg.com.br/arquivos/ids/167649-1000-1000/17523.jpg?v=636615816105370000',
  },
];

const HomeStack = () => {
  const email = 'dai';

  return (
    <ScrollView>
      <View style={styles.scrollView}>
        <Text style={styles.title}>{`Oi, ${email}`}</Text>
        <FlatList
          data={FOOD}
          horizontal={true}
          renderItem={({item}) => <ItemFood item={item} />}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.title}>Frutas</Text>
        <FlatList
          data={FRUTAS}
          renderItem={({item}) => <ItemCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default HomeStack;
