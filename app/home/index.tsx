import { Redirect, router } from "expo-router";
import { Text, View ,Image} from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../themes/GlobalStyles";
import InputTextCustom from "@/components/inputTextCustom";
import { Ionicons } from "@expo/vector-icons";
import { Colores, TamanoFlecha,  } from "../themes/Colores";
import Button_custom from "@/components/button_custom";
import Link_custom from "@/components/link_custom";
import { auth, db } from "@/Firebaseconfig";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import QRCode from "react-native-qrcode-svg"


export default function Home() {
  const coleccionUsuarios = collection(db,'Usuarios');
  const [usuarios, setUsuarios] = useState<any>([]);
  let correoQR:string;
  getAuth().onAuthStateChanged((user) => {
    if (!user) router.push('/');
  });
  function logout (){
    auth.signOut();
    console.log("Logout");

  }
  let user = auth.currentUser;
  console.log(auth.currentUser?.email)
  useEffect(() => {
    cargarDatos();
  },[user]);


  const cargarDatos = async () => {
    if (user) {
      const q = query (coleccionUsuarios,where("email","==",user.email));
      const datos = await getDocs(q);

      console.log("Encontrado el email "+user.email)

      setUsuarios(datos.docs.map((doc) => ({...doc.data(), id: doc.id})));
      console.log(usuarios);
    }
  }
  correoQR = user?.email ?? "Usuario no autenticado"

  return (
    <ScrollView
    contentContainerStyle={GlobalStyles.containerCentrado}
    >
        <Pressable style={GlobalStyles.arrow_style} onPress={logout}>
          <Ionicons name="arrow-back" size={TamanoFlecha.normal}></Ionicons>
        </Pressable>
        
        <View style={[GlobalStyles.qr_box_style,GlobalStyles.row]}>
          <QRCode value={correoQR} size={200}></QRCode>  
        </View>
        <Text style={[GlobalStyles.top_margin_negative_small,GlobalStyles.id_text]}>
          {user?.email ? user.email.split('@')[0] : "No hay usuario"}
        </Text>
        <Text style={[GlobalStyles.subtitle,GlobalStyles.bold_text]}>TU CÓDIGO QR</Text>
        <Text style={[GlobalStyles.medium_text]}>Escanéa este código para registrar la asistencia a clase.</Text>
            
    </ScrollView>
  )
}