import { Image, ScrollView, ScrollViewBase, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import LinearGradient from 'react-native-linear-gradient';
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#e30000"
                barStyle="light-content" />
            <View style={styles.mainview}>
                <Text style={styles.coinstextstyle}>{string.coins}</Text>
                <View style={styles.flexrowstyle}>
                    <Text style={styles.a1onetext}>{string.a1onlinegame}</Text>
                    <Text style={styles.a1onetext}>0.00</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.goodview}>
                    <View style={styles.flexdraction}>
                        <View>
                            <Text style={styles.hiitextstyle}>Hi, Good Evening</Text>
                            <Text style={styles.hiitextstyle}>A1-9624767583</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Profile');
                        }} style={styles.editpofileview}>
                            <Text style={styles.edtetextstyel}>{string.editprofile}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.commonview}>
                    <View style={styles.flexrowtext}>
                        <Image source={icons.megaphone} style={styles.megaphoneimg} />
                        <Text style={styles.textcommone}>{string.thisiscomm}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.optionview}>
                    <View style={styles.optionrow}>
                        <Text style={styles.optiontext}>{string.option}</Text>
                        <TouchableOpacity style={styles.chatview}>
                            <View style={styles.chatrowicon}>
                                <Image source={icons.whatsapp} style={styles.whatsappstyle} />
                                <Text style={styles.sopptext}>{string.chat}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate('LiveYantraGames')} style={styles.liveview}>
                    <View style={styles.liverow}>
                        <Image source={icons.instagramlive} style={styles.instagramliveimg} />
                        <Text style={styles.livetext}>{string.live}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1.1 }}
                        colors={['#2c7bfe', '#397efc', '#3f7ffc', '#427ff9', '#4c84fc',
                            '#5485fc', '#5984fc', '#6b89fa', '#8a85fe', '#a093fb',
                            '#af96fe', '#b597fe', '#c89afd', '#d29bfc', '#d79dfd', '#d39cfc',
                            '#d29cfc', '#d69dfd', '#e79ffe', '#eda0fe', '#f1a0fd']}

                        style={styles.livecasino}>
                        <View style={styles.liverow}>
                            <Image source={icons.casino} style={styles.casino} />
                            <Text style={styles.textLivecasino}>{string.Livecasino}</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.liveview, styles.liveviewtwo]}>
                    <View style={styles.liverow}>
                        <Image source={icons.drawhistroy} style={styles.drawhistroy} />
                        <Text style={styles.livetext}>{string.deraw}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.liveview, styles.liveviewtwo]}>
                    <View style={styles.liverow}>
                        <Image source={icons.ticket} style={styles.ticketimg} />
                        <Text style={styles.livetext}>{string.ticket}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={[styles.liveview, styles.liveviewtwo]}>
                    <View style={styles.liverow}>
                        <Image source={icons.rechages} style={styles.ticketimg} />
                        <Text style={styles.livetext}>{string.rechargewith}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.liveview, styles.liveviewtwo]}>
                    <View style={styles.liverow}>
                        <Image source={icons.switch} style={styles.Logoutimg} />
                        <Text style={[styles.livetext, styles.livetexttwo]}>{string.Logout}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.termstext}>{string.terms}</Text>
                </TouchableOpacity>
                <Text style={styles.versiontext}>{string.version}</Text>
                <View style={styles.bottommargin} />
            </ScrollView>
            <View style={styles.twoviewrow}>
                <TouchableOpacity style={styles.circleview}>
                <View style={styles.imgeviewone}>
                <Image source={icons.livechat} style={styles.livechatimg} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleviewright}>
                    <View style={styles.imgeviewtwo}>
                     <Image source={icons.share} style={styles.shareimg} />
                </View>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default Home

