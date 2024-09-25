import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../../Screen/Splash/Splash'
import Login from '../../Screen/Login/Login'
import Profile from '../../Screen/Profile/Profile'
import Wallet from '../../Screen/Wallet/Wallet'
import Home from '../../Screen/Home/Home'
import LiveYantraGames from '../../Screen/LiveYantraGames/LiveYantraGames'






const stack = createStackNavigator()
global.url = 'https://www.app.webuildindia.in/admin/public/api/'
const MainNavigation = () => {




  return (

    <NavigationContainer>
       <StatusBar backgroundColor="#e30000"  barStyle="light-content" />
      <stack.Navigator initialRouteName='Splash'>
        <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Login" component={Login} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Home" component={Home} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="LiveYantraGames" component={LiveYantraGames}  options={{ headerShown: false,screenOrientation: 'all' }}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>

  )
}

export default MainNavigation

