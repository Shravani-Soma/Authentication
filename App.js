import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import BoxSignUpScreen from './BoxSignUpScreen';
import BoxLoginScreen from './BoxLoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import RenIoT from './RenIoT';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="RenIoT" component={RenIoT} />
            <Stack.Screen name="BoxSignUp" component={BoxSignUpScreen} />
            <Stack.Screen name="BoxLogin" component={BoxLoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF'
  }
})