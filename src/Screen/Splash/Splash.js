import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const Splash = () => {
        const navigation = useNavigation();
        useEffect(() => {
          const timeout = setTimeout(() => {
         navigation.navigate('Login');
          }, 2000);
          return () => clearTimeout(timeout);
        }, [navigation]);
      
    return (
        <View style={styles.container}>
              <StatusBar backgroundColor="#e30000"  barStyle="light-content" />
            <Image source={icons.baazigaer} style={styles.logostyle} />
            {/* <Text style={styles.a1gamestext}>{string.a1onlinegame}</Text> */}
        </View>
    )
}

export default Splash

