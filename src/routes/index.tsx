import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Settings, Splash, Statistics} from '@screens';
import {Colors} from '@constants';

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: Colors.WHITE},
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
};

export default Router;
