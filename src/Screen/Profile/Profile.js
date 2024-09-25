import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'
import { string } from '../../Helper/string'
import RedButton from '../../Componets/RedButton/RedButton'

const Profile = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack(); 
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#e30000" barStyle="light-content" />
            <TouchableOpacity onPress={handleGoBack} >
            <Image source={icons.arrowleft} style={styles.leftearroestyle} />
            </TouchableOpacity>
            <Text style={styles.edittextstyle}>{string.editprofile}</Text>
            <View style={styles.profileview}>
                <View style={styles.textview}>
                    <View style={styles.flexrowstyle}>
                        <Image source={icons.people} style={styles.imgstyle}/>
                        <Text style={styles.a1numberstyle}>A1-9624767583</Text>
                    </View>
                </View>
                <View style={[styles.textview,styles.textviewtwo]}>
                    <View style={styles.flexrowstyle}>
                        <Image source={icons.smartphonecall} style={styles.imgstyle}/>
                        <Text style={styles.a1numberstyle}>9652525250</Text>
                    </View>
                </View>
                <View style={[styles.textview,styles.textviewtwo]}>
                    <View style={styles.flexrowstyle}>
                        <Image source={icons.phone} style={styles.imgstyle}/>
                        <Text style={styles.a1numberstyle}>UPI ID</Text>
                    </View>
                </View>
                <Text style={styles.upiidistextstyle}>{string.upiidis}</Text>
                <RedButton
                    titel={string.save}
                    stylerechargebuton={styles.stylerechargebuton}
                />
            </View>
            
        </View>
    )
}

export default Profile

