import { StyleSheet } from 'react-native'
import { Colores, TamanoBoton, TamanoLetra, TipoLetra } from './Colores';


export const GlobalStyles = StyleSheet.create({

  pantallaPrincipal: {

      alignItems: "center",
      backgroundColor:Colores.white,

  },
  containerCentrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
containerDerecha: {
    width:"80%",
    alignItems: "flex-end"
},
bold_text:{
    fontFamily: "MontserratBold"
},
light_blue_text:{
    color:Colores.lightBlue,
    fontFamily: "MontserratBold"
},
blue_text:{
    color:Colores.blue,
},
title:{
    fontSize:TamanoLetra.h1,

},
input_form_box:{


    paddingTop:5,
    paddingBottom:5,
    paddingRight:15,
    paddingLeft:15,
    width:'80%',
    marginTop:10,
    marginBottom:10,
    borderBottomWidth:3,
    borderBottomColor:Colores.blue,

  },
  input_form_text: {
    fontSize:TamanoLetra.normal_text,
    fontFamily: "MontserratBold"
  },
  button_box:{
    backgroundColor:Colores.blue,
    borderRadius:100,
    paddingTop:12,
    paddingBottom:12,

    width:'45%',
    marginTop:10,
    marginBottom:10,
    flex:1,
    alignItems:"center",
    alignContent:"center",
    textAlign:"center",

  },
  button_text:{
    color:Colores.white,
    fontSize:TamanoLetra.normal_text,
    fontFamily: "MontserratBold"
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center",

  },
  main_size:{
    width:"80%"
  },
  link_text:{
    color:Colores.blue,
    fontSize:TamanoLetra.normal_text,
    textDecorationLine:"underline",
    fontFamily: "MontserratBold"
  },
  link_box:{
    paddingTop:12,
    paddingBottom:12,
    width:'45%',
    marginTop:10,
    marginBottom:10,
    flex:1,
    alignItems:"center",
    alignContent:"center",
    textAlign:"center",

  },
  small_maring_top:{
    marginTop:30,
  },
  arrow_style:{
    position:"absolute",
    left:30,
    top:30,
  },
  qr_box_style:{
    width:"80%",
    backgroundColor:Colores.white,
    borderRadius:20,
    borderWidth:10,
    borderBottomWidth:70,
    borderColor:Colores.blue,
    height:"50%",
    alignItems:"center",
    alignContent:"center"
  },
  qr_style:{
    resizeMode:"contain",
    width:"90%",
    height:"90%"
  },
  top_margin_negative_small:{
    marginTop:-50,
  },
  id_text:{
    fontSize:TamanoLetra.h3,
    color:Colores.white,
    fontFamily: "MontserratBold"
  },
  subtitle:{
    marginTop:50,
    fontSize:TamanoLetra.h2,
    fontFamily: "MontserratBold"
  },
  medium_text:{
    marginTop: 10,
    fontSize:TamanoLetra.h2,
    textAlign:"center",
    width:"80%",
    fontFamily: "Montserrat"
  },
})