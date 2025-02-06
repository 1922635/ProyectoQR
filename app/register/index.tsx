import { Redirect, router } from "expo-router";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../themes/GlobalStyles";
import InputTextCustom from "@/components/inputTextCustom";
import { Ionicons } from "@expo/vector-icons";
import { Colores } from "../themes/Colores";
import Button_custom from "@/components/button_custom";
import Link_custom from "@/components/link_custom";


export default function Register() {
  return (
    <ScrollView
    contentContainerStyle={GlobalStyles.containerCentrado}>
        <Ionicons name="person-circle-outline" size={140} color={Colores.blue}/>
        <Text style={[GlobalStyles.title,GlobalStyles.bold_text,GlobalStyles.blue_text]}>Registro</Text>
        <InputTextCustom nombre="NRE"></InputTextCustom>
        <InputTextCustom nombre="Contraseña" TextoSeguro={true}></InputTextCustom>
        <InputTextCustom nombre="Confirmar contraseña" TextoSeguro={true}></InputTextCustom>
        <View style={[GlobalStyles.row,GlobalStyles.main_size,GlobalStyles.small_maring_top]}>
          <Link_custom nombre="Iniciar sesión" onPress={()=>{router.push('./login')}}></Link_custom>
          <Button_custom nombre="Registrarse" onPress={()=>{router.push('./home')}}></Button_custom>
        </View>
        
        
    </ScrollView>
  )
}