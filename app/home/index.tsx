import { Redirect, router } from "expo-router";
import { Text, View ,Image} from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../themes/GlobalStyles";
import InputTextCustom from "@/components/inputTextCustom";
import { Ionicons } from "@expo/vector-icons";
import { Colores, TamanoFlecha,  } from "../themes/Colores";
import Button_custom from "@/components/button_custom";
import Link_custom from "@/components/link_custom";
import { auth } from "@/Firebaseconfig";
import { getAuth } from "firebase/auth";


export default function Home() {

  getAuth().onAuthStateChanged((user) => {
    if (!user) router.push('/');
  });
  function logout (){
    auth.signOut();
    console.log("Logout");

  }

  return (
    <ScrollView
    contentContainerStyle={GlobalStyles.containerCentrado}
    >
        <Pressable style={GlobalStyles.arrow_style} onPress={logout}>
          <Ionicons name="arrow-back" size={TamanoFlecha.normal}></Ionicons>
        </Pressable>
        
        <View style={[GlobalStyles.qr_box_style,GlobalStyles.row]}>
          <Image source={require("../../assets/images/qrtest.png")} style={GlobalStyles.qr_style}></Image>
        </View>
        <Text style={[GlobalStyles.top_margin_negative_small,GlobalStyles.id_text]}>ID: 000000000000</Text>
        <Text style={[GlobalStyles.subtitle,GlobalStyles.bold_text]}>TU CÓDIGO QR</Text>
        <Text style={[GlobalStyles.medium_text]}>Escanéa este código para registrar la asistencia a clase.</Text>
            
    </ScrollView>
  )
}