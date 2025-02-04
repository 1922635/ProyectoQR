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
    fontWeight:"bold",
},
light_blue_text:{
    color:Colores.lightBlue,
},
blue_text:{
    color:Colores.blue,
},
title:{
    fontSize:TamanoLetra.h1
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
  },
  fila: {
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
})