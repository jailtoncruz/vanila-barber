import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import Login from './pages/Home/Login';
import SignIn from './pages/Home/SignIn';
import ForgotPassword from './pages/Home/ForgotPassword'

const Routes = () => {
    function MainStackScreen() {
        return (
          <MainStack.Navigator headerMode="none" >
              <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Dashboard" component={Dashboard} />
          </MainStack.Navigator>
        );
      }

    return (
        <NavigationContainer>
              <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Home" component={MainStackScreen} />
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="Signin" component={SignIn} />
                <RootStack.Screen name="Forgot" component={ForgotPassword} />
              </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;