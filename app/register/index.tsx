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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebaseconfig";


export default function Register() {
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[passwordConfirm,setPasswordConfirm]= useState('');
    const register = async ()=>{
      try{
          if(password==passwordConfirm){
            const user = await (createUserWithEmailAndPassword(auth,email,password))
          }else{
            Alert.alert("Las contraseñas no coinciden")
          }
      }catch(error:any){
        console.log(error);
        Alert.alert("Ha ocurrido un error al registrar al usuario",error.message)
      }
    }
  return (
    <ScrollView
    contentContainerStyle={GlobalStyles.containerCentrado}>
        <Ionicons name="person-circle-outline" size={140} color={Colores.blue}/>
        <Text style={[GlobalStyles.title,GlobalStyles.bold_text,GlobalStyles.blue_text]}>Registro</Text>
        <InputTextCustom onChangeText={setEmail} nombre="NRE"></InputTextCustom>
        <InputTextCustom onChangeText={setPassword} nombre="Contraseña" TextoSeguro={true}></InputTextCustom>
        <InputTextCustom onChangeText={setPasswordConfirm}  nombre="Confirmar contraseña" TextoSeguro={true}></InputTextCustom>
        <View style={[GlobalStyles.row,GlobalStyles.main_size,GlobalStyles.small_maring_top]}>
          <Link_custom nombre="Iniciar sesión" onPress={()=>{router.push('./login')}}></Link_custom>
          <Button_custom nombre="Registrarse" onPress={register}></Button_custom>
        </View>
        
        
    </ScrollView>
  )
}