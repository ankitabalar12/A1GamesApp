import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RedButton = ({titel,onPress,stylerechargebuton,stylwithodraw}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.mainbuttonview,stylerechargebuton,stylwithodraw]}>
      <Text style={styles.buttontextstyle}>{titel}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default RedButton

const styles = StyleSheet.create({
    mainbuttonview:{
        height:40, 
        width:"75%",
        backgroundColor:"#e30000",
        borderRadius:5, 
        justifyContent:"center", 
        marginTop:"10%", alignSelf:"center"

    },
    buttontextstyle:{
        alignSelf:"center", 
        color:"#fff",
         fontSize:16,
         fontFamily: 'Poppins-SemiBold',
    }
})