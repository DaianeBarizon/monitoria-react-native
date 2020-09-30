import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button';

//import Menina from '../../assets/svg/menina.svg';
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleOnPressCadastro = () => {
    console.log('criar conta');
  };

  const handleOnPressEntrarHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTxt}>
        <Text style={styles.txtTitle}>Organic Food</Text>
      </View>
      <View style={styles.containerLogo}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>Lorem Ipsum</Text>
      </View>
      <View style={styles.containerLogin}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          value={email}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => setSenha(text)}
          placeholder="Senha"
          value={senha}
        />
        {/* <Menina /> */}
        <Button
          title="Entrar"
          onPress={handleOnPressEntrarHome}
          style={{marginTop: 20, backgroundColor: '#C13355'}}
        />
        <View style={styles.container}>
          <FlatList
            data={array}
            keyExtractor={item.id}
            renderItem={({item}) => <ItemCard item={item} />}
          />
        </View>

        <Button
          title="Criar conta"
          onPress={handleOnPressCadastro}
          style={{
            marginTop: 20,
            backgroundColor: '#FFF',
            borderColor: '#6F6F6F',
            borderWidth: 2,
          }}
        />
        <Text style={styles.primaryPart}>
          Esqueceu sua senha?{' '}
          <Text style={styles.secondPart}>Lembrar senha</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
