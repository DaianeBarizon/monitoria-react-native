/////////////////////////////////////////////////////////////////////////////////////////
//Trabalha no app.js
//Configura arquitetura de pastas
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////

//Trabalha no app.js
//Leva app.js para dentro da pasta src
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

//Cria o StackNavigator
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";
import Carrinho from "../screens/Carrinho";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

//Cria as 4 telas Login, Cadastro, Carrinho, Home
import React from "react";
import { View, Text } from "react-native";

const Cadastro = () => {
  return (
    <View>
      <Text>Cadastro</Text>
    </View>
  );
};

export default Cadastro;

//Cria um jconfig.json
/*{
    "compilerOptions": {
        "jsx": "react"
    }
}*/

//Babel
//Instala babel-plugin-module-resolver
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    ],
  ],
};

//metro.config
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ["js", "jsx", "json", "ts", "tsx"],
  },
};

//.eslintrc.json
//Configurei para .json
/*{
    "env": {
      "browser": true,
      "es6": true,
      "commonjs": true,
      "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 9,
      "ecmaFeatures": {
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
      "react/react-in-jsx-scope": 0,
      "no-console": 1
    }
}*/

//Instala DrawerNavigator
//DrawerNavigator
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Carrinho from "../screens/Carrinho";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

//Altera Login
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const handleOnPressHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Home" onPress={handleOnPressHome} />
    </View>
  );
};

export default Login;

//Altera StackNavigator
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import DrawerNavigator from "./DrawerNavigator";
import Carrinho from "../screens/Carrinho";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

//Alguns atributos
/*options={{ headerShown: false }} 
initialRouteName="Home"
options={{
  title: 'My home',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}*/

/////////////////////////////////////////////////////////////////////////////////////////
