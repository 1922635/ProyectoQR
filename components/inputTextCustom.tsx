
import { GlobalStyles } from "@/app/themes/GlobalStyles";
import { Link } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleProp, Text,TextStyle,View, ViewStyle} from 'react-native';

import { TextInput } from "react-native-gesture-handler";

interface Props{
    TextoSeguro?:boolean
    nombre:string
    onChangeText:Dispatch<SetStateAction<string>>
    Estilo_Caja?:StyleProp<ViewStyle>,
    Estilo_Texto?:StyleProp<TextStyle>,

}

export default function InputTextCustom({TextoSeguro,nombre,onChangeText,Estilo_Caja,Estilo_Texto}:Props) {


  return(
    
          <View style={[GlobalStyles.input_form_box,Estilo_Caja]}>
            <TextInput style={[GlobalStyles.input_form_text,Estilo_Texto]} secureTextEntry={TextoSeguro} placeholder={nombre} onChangeText={onChangeText}></TextInput>
          </View>

  )
}