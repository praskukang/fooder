import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Details, InputMeja, Tabbar} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputMeja"
        component={InputMeja}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabbar"
        component={Tabbar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
