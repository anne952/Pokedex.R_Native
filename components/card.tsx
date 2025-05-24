import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import {type ViewProps, type ViewStyle, View  } from "react-native";

type Props = ViewProps


export function Card ({style, ...rest}: Props){
    const colors = useThemeColors()
    return <View {...rest} style={[style, styles, {backgroundColor: colors.grayWhite}]} />

}


const styles = {
    
   
    borderRadius: 8,
    ...Shadows.dp2,

} satisfies ViewStyle