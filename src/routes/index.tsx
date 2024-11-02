import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home, Settings, Splash, Statistics} from '@screens';
import {Colors} from '@constants';
import {BottomNavigator} from '@components';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const MainApp = () => {
  const renderBottomTabBar = (props: BottomTabBarProps) => {
    return <BottomNavigator {...props} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: Colors.WHITE}}
      initialRouteName="Home"
      tabBar={renderBottomTabBar}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: Colors.WHITE},
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
};

export default Router;
