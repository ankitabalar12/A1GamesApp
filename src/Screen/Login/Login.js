import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import { styles } from './styles'
import RedButton from '../../Componets/RedButton/RedButton'
import ReactNativeModal from 'react-native-modal'
import OTPTextInput from 'react-native-otp-textinput';

const Login = ({ navigation, duration }) => {
    
    const [mobilenumber, setMobileNumber] = useState('')
    const [error, setError] = useState('')
    const [modalVisible, setModalVisible] = useState()
    const [otp, setOtp] = useState('')
    const [timeLeft, setTimeLeft] = useState(60);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);
    const formatTimeLeft = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const handleOTPChange = (code) => {
        setOtp(code);
    };
    const logindata = () => {
        const error = {};
        if (!mobilenumber) {
            error.mobilenumber = 'Please enter Mobile Number';
        }
        if (Object.keys(error).length > 0) {
            setError(error);
            return;
        }
        setError({});
        setModalVisible(true);
    };


    return (
        <View style={styles.container}>
            <ScrollView>
              <StatusBar backgroundColor="#e30000"   barStyle="light-content" />
              <View style={{backgroundColor:"#000"}}>
            <Image source={icons.baazigaer} style={styles.logostyle} />
            </View>
            {/* <Text style={styles.a1gamestext}>{string.a1onlinegame}</Text> */}
            <View style={styles.maincontainerview}>
                <Text style={styles.enternumbertext}>{string.enternumber}</Text>
                <Text style={styles.pleaseentertext}>{string.pleaseenter}</Text>
                <View style={styles.Textinputview}>
                    <View style={styles.flexdrarectionview}>
                        <Text style={styles.numbertextstyle}>+91</Text>
                        <View style={styles.centerview}></View>
                        <TextInput
                            placeholder="0000000000"
                            placeholderTextColor={'#c1c1c1'}
                            value={mobilenumber}
                            maxLength={10}
                            keyboardType='numeric'
                            onChangeText={(mobilenumber) => setMobileNumber(mobilenumber)}
                            style={styles.input}
                        />
                    </View>
                </View>
                {error.mobilenumber && <Text style={styles.errortext}>{error.mobilenumber}</Text>}
                <RedButton
                    titel={string.login}
                    onPress={logindata}
                />
            </View>

            <ReactNativeModal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                transparent={true}
                backdropColor={'#000'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.6}>
                <View style={styles.modaleviewstyle}>
                    <Text style={styles.forverificationtext}>{string.forverification} +91 9999999999</Text>
                    <Text style={styles.enterittext}>{string.enterit}</Text>
                    <OTPTextInput
                        containerStyle={styles.otpContainer}
                        textInputStyle={styles.otpInput}
                        handleTextChange={(code) => handleOTPChange(code)}
                        inputCount={6}
                        keyboardType="numeric"
                    />
                    <RedButton
                        titel={string.verifi}
                        onPress={() => {
                            {
                                setModalVisible(false);
                                navigation.navigate('Home')
                            }
                        }}
                    />
                    <Text style={styles.timeofotp}>{formatTimeLeft()}</Text>
                </View>
            </ReactNativeModal>
            <View style={styles.marginbottom}></View>
            </ScrollView>
        </View>
    )
}

export default Login

