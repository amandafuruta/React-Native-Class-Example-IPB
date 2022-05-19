import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
main:{
  flex: 1,
  flexDirection: "column",
  marginTop:50
},
layer1: {
  flex: 4,
  alignItems: 'center',
  padding:20
},
img: {
  height:200,
  width:200,
  borderRadius: 100,
  backgroundColor:'#eee'
},
layer2:{
  flex:4,
  justifyContent:'center',
  alignItems: 'center',
  padding:20,
  backgroundColor:'powderblue'
},

header:{
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 40,
  marginTop:40
},
body:{
  textAlign:'justify'
},
layer3:{
  flex:1,
  flexDirection:"row"
},
layer4:{
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: '#21618C'
},
layer5:{
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: 'steelblue'
},
footer:{
  fontSize: 16,
  fontWeight:'bold',
  color:"#fff"
}
});


export default styles;