import React, {useState} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import LottieView from 'lottie-react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setReady] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 8000);

  setTimeout(() => {
    setReady(true);
  }, 3000);

  return (
    <>
      {isLoading ? (
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {isReady ? (
            <ActivityIndicator size="large" color="#98D15A" />
          ) : (
            <LottieView
              autoPlay={true}
              loop={true}
              source={require('../fruta.json')}
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
