
import { GlobalStyles } from "@/app/themes/GlobalStyles";
import { Link, Redirect } from "expo-router";
import { Pressable, StyleProp, Text,TextStyle,View, ViewStyle} from 'react-native';

import { TextInput } from "react-native-gesture-handler";

interface Props{

    nombre:string
    Estilo_Caja?:StyleProp<ViewStyle>,
    Estilo_Texto?:StyleProp<TextStyle>,
    onPress?: () => void;

}

export default function Link_custom({nombre,Estilo_Caja,Estilo_Texto,onPress}:Props) {


  return(
    
          <Pressable style={[GlobalStyles.link_box,Estilo_Caja]}>
            <Text style={[GlobalStyles.link_text,Estilo_Texto]} onPress={onPress}>{nombre}</Text>
          </Pressable>

  )
}