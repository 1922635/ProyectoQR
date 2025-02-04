import { Redirect, router } from "expo-router";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../themes/GlobalStyles";
import InputTextCustom from "@/components/inputTextCustom";
import { Ionicons } from "@expo/vector-icons";
import { Colores } from "../themes/Colores";
import Button_custom from "@/components/button_custom";
import Link_custom from "@/components/link_custom";


export default function Home() {
  return (
    <ScrollView
    contentContainerStyle={GlobalStyles.containerCentrado}
    >

        <Text>Home</Text>
            
    </ScrollView>
  )
}