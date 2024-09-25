import { Dimensions, Image, StyleSheet, Text, View, useWindowDimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'

const LiveYantraGames = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');
  const { width, height } = useWindowDimensions();

  // useEffect(() => {
  //   const updateOrientation = ({ window: { width, height } }) => {
  //     if (width < height) {
  //       setOrientation('PORTRAIT');
  //     } else {
  //       setOrientation('LANDSCAPE');
  //     }
  //   };

  //   Dimensions.addEventListener('change', updateOrientation);

  //   return () => {
  //     Dimensions.removeEventListener('change', updateOrientation);
  //   };
  // }, []);
  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      if (width > height) {
        // Landscape orientation
        // You can add your custom logic here for landscape mode
      } else {
        // Portrait orientation
        // You can add your custom logic here for portrait mode
      }
    };

    // Add event listener for orientation change
    Dimensions.addEventListener('change', updateOrientation);

    // Remove event listener when component unmounts
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

return (
  <View style={[styles.container, orientation === 'LANDSCAPE' && styles.landscape]}>
      <View style={styles.headerview}>
        <View style={styles.flexrow}>
          <Image source={icons.arrowleft} style={styles.arrowstyle}></Image>
          <Text style={styles.marketopentime}>{string.marketopentime}</Text>
          <View style={styles.positionview}>
            <Text style={styles.coinstextstyle}>{string.coins}</Text>
            <Text style={styles.coinstextstyle2}>0.00</Text>
          </View>
          <Image source={icons.rechages} style={styles.rechargesimg}></Image>
        </View>

      </View>
    </View>
  )
}

export default LiveYantraGames

