import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    flexrow: {
        flexDirection: 'row', 
    },
    headerview: {
        height: 60, width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    arrowstyle: {
        height: 15,
        width: 15,
        tintColor: '#000', marginLeft: "2%"
    },
    marketopentime: {
        fontSize: 11,
        color: "#000",
        fontFamily: 'Poppins-SemiBold',
        marginLeft:'2%'
    },
    coinstextstyle2:{
        fontSize: 11,
        color: "#000",
        fontFamily: 'Poppins-SemiBold',
    },
    positionview:{
        position:'absolute', right:50,

    },
    rechargesimg:{
        height:30, 
        width:30, position:"absolute", right:15
    }
})