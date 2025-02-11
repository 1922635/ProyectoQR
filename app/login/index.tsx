import { Redirect, router } from "expo-router";
import { Alert, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../themes/GlobalStyles";
import InputTextCustom from "@/components/inputTextCustom";
import { Ionicons } from "@expo/vector-icons";
import { Colores } from "../themes/Colores";
import Button_custom from "@/components/button_custom";
import Link_custom from "@/components/link_custom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebaseconfig";


export default function Login() {
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const logIn = async ()=>{
    try{
      const user = await (signInWithEmailAndPassword(auth,email,password))
      router.push("/home")
    }catch(error:any){
      console.log(error);
      Alert.alert("Ha ocurrido un error al iniciar sesión",error.message)
    }
  }
  return (
    <ScrollView
    contentContainerStyle={GlobalStyles.containerCentrado}>
        <Ionicons name="person-circle-outline" size={140} color={Colores.blue}/>
        <Text style={[GlobalStyles.title,GlobalStyles.bold_text,GlobalStyles.blue_text]}>Iniciar sesión</Text>
        <InputTextCustom onChangeText={setEmail} nombre="NRE"></InputTextCustom>
        <InputTextCustom onChangeText={setPassword} nombre="Contraseña" TextoSeguro={true}></InputTextCustom>
        <View style={GlobalStyles.containerDerecha}><Text style={GlobalStyles.light_blue_text}>¿Olvidaste la contraseña?</Text></View>
        <View style={[GlobalStyles.row,GlobalStyles.main_size,GlobalStyles.small_maring_top]}>
          <Link_custom nombre="Registrarse" onPress={()=>{router.push('./register')}}></Link_custom>
          <Button_custom nombre="Acceder" onPress={logIn}></Button_custom>
        </View>
        
        
    </ScrollView>
  )
}