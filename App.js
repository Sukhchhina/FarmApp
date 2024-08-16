import React from 'react';
import {Amplify} from 'aws-amplify';
import awsmobile from './src/amplifyconfiguration.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';


// Import Screens
import SplashScreen from './src/screens/SplashScreen';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyFarmScreen from './src/screens/MyFarmScreen';
import CropsScreen from './src/screens/CropsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
Amplify.configure(awsmobile);

// Bottom Tab Navigator for the main app
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;


          if (route.name === 'Home') {
            iconSource = require('./src/assets/icons_home.png');
          } else if (route.name === 'MyFarm') {
            iconSource = require('./src/assets/icons_farm.png');
          } else if (route.name === 'Crops') {
            iconSource = require('./src/assets/icons_crops.png');
          } else if (route.name === 'Profile') {
            iconSource = require('./src/assets/icons_account.png');
          }

          return (<Image
          source={iconSource}
          style={{ width: size, height: size, tintColor: color }}
        />);
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4CAF50',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyFarm" component={MyFarmScreen} />
      <Tab.Screen name="Crops" component={CropsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main App Navigator
function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Authentication screens */}
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
          
      {/* Main app screen with tabs */}
      <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
