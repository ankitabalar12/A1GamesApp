import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    logostyle: {
        height: 80, width: 200,
        alignSelf: "center",
        marginTop: '20%'
    },
    a1gamestext: {
        textAlign: "center",
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: "#e30000"
    },
    marginbottom:{
marginBottom:"20%"
    },
    maincontainerview: {
        height: 280,
        width: '85%',
        backgroundColor: "#2a2a2a",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: "10%"
    },
    enternumbertext: {
        textAlign: "center",
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        marginTop: "10%"
    },
    pleaseentertext: {
        fontSize: 13,
        textAlign: "center",
        marginHorizontal: "15%",
        color: '#c1c1c1'
    },
    Textinputview: {
        height: 40,
        width: "55%",
        borderColor: "#646464",
        borderWidth: 1,
        marginTop: '10%',
        alignSelf: "center",
        borderRadius: 5,
         justifyContent:"center", 
    },
    flexdrarectionview:{
        flexDirection:"row", 
        marginHorizontal:"8%",
    },
    numbertextstyle:{
        color:'#fff',
         fontSize:15, 
         alignSelf:"center"
    },
    centerview:{
        height:27, 
        width:1,
         backgroundColor:'#fff',
          marginLeft:'5%', alignSelf:"center"
    },
    input:{
        marginLeft:"5%",
         fontSize:15, 
         color:"#c1c1c1",
    },
    errortext: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
       alignSelf:"center"
    },
    modaleviewstyle:{
        height:280,
         width:'85%',
         backgroundColor: "#2a2a2a",
       alignSelf:"center",
        marginTop:-80, borderRadius:10
    },
    enterittext:{
        fontSize:13, 
        color: '#c1c1c1', 
        alignSelf:"center", 
        marginTop:"3%"

    },
    forverificationtext:{
        textAlign:"center",
        color: '#c1c1c1',
        fontSize:13, 
        marginHorizontal:"20%",
        marginTop:"8%"
    },
    otpContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
         alignSelf:'center'
      },
      otpInput: {
        width: 40,
        height: 40,
        borderRadius:5, 
        textAlign: 'center',
        borderColor:'#929292',
        borderWidth:1,
        backgroundColor:'#414141',
        borderBottomColor:'#929292',
        borderTopColor:'#929292',
        borderEndColor:'#929292',
        // borderLeftColor:"#929292",
        // borderRightColor:"#929292",
        marginTop:"5%", fontSize:15, color:'#fff'
      },
      timeofotp:{
        textAlign:"center",
        marginTop:"5%",  color: "#e30000"
      }
     
})