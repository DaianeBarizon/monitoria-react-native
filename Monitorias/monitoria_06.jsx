//splash Screen
//Consegue importar animacoes somente com json
//Exportacao no formato json
//Lottie desenvolvida pelo Airbnb
//Lido por qualquer plataforma Mobile, Web
//Le a animacao e coloca em tela pra gente
//Lottie Libray (Baixar JSON)
//https://github.com/react-native-community/lottie-react-native //yarn add lottie-react-native
//Coloca o json da imagem dentro da raiz do projeto
//https://www.youtube.com/watch?v=V3QGW2PgKKY&feature=youtu.be

import React, { useState } from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";
import LottieView from "lottie-react-native";

const App = () => {
  const [isReady, setReady] = useState(false);
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setReady(true);
  }, 3000);

  setTimeout(() => {
    setLoading(false);
  }, 8000);

  return (
    <>
      {isLoading ? (
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {!isReady ? (
            <ActivityIndicator size="large" color="#98D15A" />
          ) : (
            <LottieView
              autoPlay={true}
              loop={true}
              source={require("../fruta.json")}
            />
          )}
        </SafeAreaView>
      ) : (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

//Toda requisicao http antes de ser enviada ela vai passar por uma intercepcao fazendo algumas tratativas

//Interceptor
//Para falar em termos simples, é mais um ponto de verificação para cada ação http.
//Cada chamada de API feita é passada por esse interceptor.

//Então, por que dois interceptores?

//Uma chamada de API é composta de duas metades, uma solicitação e uma resposta.
//Como ele se comporta como um ponto de verificação, a solicitação e a resposta têm interceptores separados.

//Alguns casos de uso de interceptor de solicitação

//Suponha que você queira verificar antes de fazer uma solicitação, suas credenciais são válidas?
//Portanto, em vez de realmente fazer uma chamada de API, você pode verificar no nível do interceptor quais são suas credenciais válidas.

//Suponha que você precise anexar um token a cada solicitação feita,
//em vez de duplicar a lógica de adição de token em cada chamada axios,
//você pode fazer um interceptor que anexa um token em cada solicitação feita.

//Alguns casos de uso do interceptor de resposta -

//Suponha que você obteve uma resposta e, a julgar pelas respostas da API, você deseja deduzir que o usuário está conectado.
//Portanto, no interceptor de resposta, você pode inicializar uma classe que trata o usuário conectado no estado e atualizá-lo de acordo com o objeto de resposta que você recebido.

//Suponha que você tenha solicitado alguma api com credenciais de api válidas, mas não tenha a função válida para acessar os dados.
//Portanto, você pode ativar um alerta do interceptor de resposta dizendo que o usuário não tem permissão. Desta forma, você será salvo do tratamento de erros de api não autorizado que você teria que executar em cada solicitação de axios que você fez.
