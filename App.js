/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Load from './src/view/Load';
import Signin from './src/view/signin';
import Home from './src/view/home';
import Voting from './src/view/voting';
import Profile from './src/view/profile';
import Create from './src/view/create';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={Load}
        />
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Voting" component={Voting} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Create" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
