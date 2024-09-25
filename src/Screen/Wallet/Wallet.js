import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import ReactNativeModal from 'react-native-modal'
import RedButton from '../../Componets/RedButton/RedButton'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Wallet = () => {
    const navigation = useNavigation();
    const [showTransactions, setShowTransactions] = useState(false);
    const [modalVisible, setModalVisible] = useState();
    const [modalVisible2, setModalVisible2] = useState();
    const [is_selecteprice, setIs_SectedPrice] = useState();
    const [amount, setAmount] = useState();
    const [upi_id, setUPI_ID] = useState();
    const [accountholdername, setAaccountHolderName] = useState();
    const [bankaccountnumber, setBankaccountNumber] = useState();
    const [IFS_code, setIFSC_Code] = useState();
    const [bankName, setBankName] = useState();
    const [error, setError] = useState('')
    const detailesdata = () => {
        const error = {};
        if (!amount) {
            error.amount = 'Please enter amount';
        }
        if (!upi_id) {
            error.upi_id = 'Please enter upi_id';
        }
        if (!accountholdername) {
            error.accountholdername = 'Please enter account holder name';
        }
        if (!bankaccountnumber) {
            error.bankaccountnumber = 'Please enter Banka account number';
        }
        if (!bankName) {
            error.bankName = 'Please enter BankName';
        }
        if (!IFS_code) {
            error.IFS_code = 'Please enter amount';
        }
        if (Object.keys(error).length > 0) {
            setError(error);
            return;
        }
        setError({});
        setModalVisible(true);
    };
    const handleGoBack = () => {
        navigation.goBack(); 
    }
    const pricesselected = (id) => {
        setIs_SectedPrice(id);
    }
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2)
    }
    const toggleTransactions = () => {
        setShowTransactions(!showTransactions);
    };
    const getPriceText = (price) => {
        switch (price) {
            case 1:
                return '+300';
            case 2:
                return '+500';
            case 3:
                return '+1000';
            case 4:
                return '+1500';
            case 5:
                return '+2000';
            case 6:
                return '+2500';
            default:
                return '';
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#e30000"
                //  barStyle="dark-content"
                barStyle="light-content" />
            <View style={styles.mainview}>
                <View style={styles.flexrowstyle}>
                     <TouchableOpacity style={styles.backarrow} onPress={handleGoBack} >
                    <Image source={icons.arrowleft} style={styles.leftearroestyle} />
                    </TouchableOpacity>
                    <Text style={styles.wallettext}>{string.wallet}</Text>
                </View>
            </View>
            <View style={styles.secondview}>
                <View style={styles.flexrowtex}>
                    <View style={styles.viewinview}>
                        <Text style={styles.yourcoins}>{string.yourcoins}</Text>
                        <Text style={styles.number}>0.00</Text>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(true)
                        }}
                            style={styles.rechargebuttonview}>
                            <Text style={styles.buttontextstyle}>{string.recharge}</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={[styles.viewinview]}>
                        <Text style={styles.yourcoins}>{string.blocked}</Text>
                        <Text style={styles.number}>0.00</Text>
                        <View style={styles.flexrowtwo}>
                            <Text style={styles.number2}>0.00</Text>
                            <View style={styles.viewstyle}></View>
                            <Text style={[styles.number2, styles.number3]}>0.00</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            setModalVisible2(true)
                        }} style={styles.withdrawbuton}>
                            <Text style={styles.buttontextstyle}>{string.whitdraw}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={toggleTransactions} style={styles.transaviwe}>
                <Text style={styles.transactionstext}>{string.transactions}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleview}></TouchableOpacity>

            {showTransactions && (
                <Text style={styles.notransac}>{string.notransactiontext}</Text>
            )}
            <ReactNativeModal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                transparent={true}
                backdropColor={'#000'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.6}>
                <View style={styles.mainviewfirstmodel}>
                    <Text style={styles.textrecharge}>{string.recharge}</Text>
                    <Text style={styles.rechargey}>{string.rechargeyourwallet}</Text>
                    <View style={styles.amountstyle}>
                        {is_selecteprice ? (
                            <Text style={styles.amounytext}>
                                {getPriceText(is_selecteprice)}
                            </Text>
                        ) : (
                            <Text style={styles.amounytext}>₹ Amount</Text>
                        )}
                    </View>
                    <View style={styles.flexwrowprice}>
                        <TouchableOpacity onPress={() => { pricesselected(1) }} style={[styles.priceview, { borderColor: is_selecteprice === 1 ? '#e30000' : '#929292' }]}>
                            <Text style={styles.textprocesstyle}>+300</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { pricesselected(2) }} style={[styles.priceview, { borderColor: is_selecteprice === 2 ? '#e30000' : '#929292' }]}>
                            <Text style={styles.textprocesstyle}>+500</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { pricesselected(3) }} style={[styles.priceview, { borderColor: is_selecteprice === 3 ? '#e30000' : '#929292' }]}>
                            <Text style={styles.textprocesstyle}>+1000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { pricesselected(4) }} style={[styles.priceview, { borderColor: is_selecteprice === 4 ? '#e30000' : '#929292' }]}>
                            <Text style={styles.textprocesstyle}>+1500</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { pricesselected(5) }} style={[styles.priceview, { borderColor: is_selecteprice === 5 ? '#e30000' : '#929292' }]}>
                            <Text style={styles.textprocesstyle}>+2000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { pricesselected(6) }} style={[styles.priceview, { borderColor: is_selecteprice === 6 ? '#e30000' : '#929292' }]}>
                            <Text style={styles.textprocesstyle}>+2500</Text>
                        </TouchableOpacity>
                    </View>
                    <RedButton
                        titel={string.pay}
                        stylerechargebuton={styles.stylerechargebuton}
                        onPress={() => {
                            setModalVisible(false)
                        }}
                    />
                </View>

            </ReactNativeModal>
            <ReactNativeModal
                isVisible={modalVisible2}
                onBackdropPress={toggleModal2}
                transparent={true}
                backdropColor={'#000'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.6}>
                <View style={styles.secondmodalview}>
                    <Text style={styles.textrecharge}>{string.whitdraw}</Text>
                    <ScrollView>
                        <Text style={styles.rechargey}>{string.Request}</Text>

                        <View style={styles.amountstyle2}>
                            <TextInput
                                placeholder="₹ Amount"
                                placeholderTextColor={'#c1c1c1'}
                                value={amount}
                                maxLength={10}
                                keyboardType='numeric'
                                onChangeText={(amount) => setAmount(amount)}
                                style={styles.input}
                            />
                        </View>
                        {error.amount && <Text style={styles.errortext}>{error.amount}</Text>}
                        <Text style={styles.Requestfortext}>{string.Requestfor}</Text>
                        <View style={styles.amountstyle2}>
                            <View style={styles.flexrowtexinpiut}>
                                <Image source={icons.phone} style={styles.uopiimg} />
                                <TextInput
                                    placeholder="UPI Id"
                                    placeholderTextColor={'#c1c1c1'}
                                    value={upi_id}
                                    keyboardType='numeric'
                                    onChangeText={(upi_id) => setUPI_ID(upi_id)}
                                    style={styles.inputwo}
                                />
                            </View>
                        </View>
                        {error.upi_id && <Text style={styles.errortext}>{error.upi_id}</Text>}
                        <View style={styles.flexrowfiveview}>
                            <View style={styles.viewstylwe}></View>
                            <Text style={styles.ortextstyle}>OR</Text>
                            <View style={styles.viewstylwe}></View>
                        </View>
                        <View style={styles.amountstyle2}>
                            <View style={styles.flexrowtexinpiut}>
                                <Image source={icons.people} style={styles.uopiimg2} />
                                <TextInput
                                    placeholder="Account Holder Name"
                                    placeholderTextColor={'#c1c1c1'}
                                    value={accountholdername}
                                    keyboardType='numeric'
                                    onChangeText={(accountholdername) => setAaccountHolderName(accountholdername)}
                                    style={styles.inputwo}
                                />
                            </View>
                        </View>
                        {error.accountholdername && <Text style={styles.errortext}>{error.accountholdername}</Text>}
                        <View style={styles.amountstyle2}>
                            <View style={styles.flexrowtexinpiut}>
                                <Image source={icons.bankbuilding} style={styles.uopiimg3} />
                                <TextInput
                                    placeholder="Bank Account Number"
                                    placeholderTextColor={'#c1c1c1'}
                                    value={bankaccountnumber}
                                    keyboardType='numeric'
                                    onChangeText={(bankaccountnumber) => setBankaccountNumber(bankaccountnumber)}
                                    style={styles.inputwo}
                                />
                            </View>
                        </View>
                        {error.bankaccountnumber && <Text style={styles.errortext}>{error.bankaccountnumber}</Text>}
                        <View style={styles.amountstyle2}>
                            <View style={styles.flexrowtexinpiut}>
                                <Image source={icons.bankbuilding} style={styles.uopiimg3} />
                                <TextInput
                                    placeholder="Bank Name"
                                    placeholderTextColor={'#c1c1c1'}
                                    value={bankName}
                                    onChangeText={(bankName) => setBankName(bankName)}
                                    style={styles.inputwo}
                                />
                            </View>
                        </View>
                        {error.bankName && <Text style={styles.errortext}>{error.bankName}</Text>}
                        <View style={styles.amountstyle2}>
                            <View style={styles.flexrowtexinpiut}>
                                <Image source={icons.bankbuilding} style={styles.uopiimg3} />
                                <TextInput
                                    placeholder="IFSC Code"
                                    placeholderTextColor={'#c1c1c1'}
                                    value={IFS_code}
                                    onChangeText={(IFS_code) => setIFSC_Code(IFS_code)}
                                    style={styles.inputwo}
                                />
                            </View>
                        </View>
                        {error.IFS_code && <Text style={styles.errortext}>{error.IFS_code}</Text>}
                       
                        <Text style={styles.nottext}>{string.notewith}</Text>
                        <RedButton
                        titel={string.pay}
                        stylwithodraw={styles.stylwithodraw}
                        onPress={() => detailesdata()} 
                    />
                        <View style={styles.marbottom} />
                    </ScrollView>
                </View>
            </ReactNativeModal>
        </View>
    )
}

export default Wallet

