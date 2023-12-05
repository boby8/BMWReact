
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import Testing from '../screens/Testing';
import Chapter1 from '../screens/chapter01';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='splash'>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="testing"
            component={Testing}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="chapter1"
            component={Chapter1}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default AppNavigator;
