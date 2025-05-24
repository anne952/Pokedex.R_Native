import{ StyleSheet, Text, type TextProps} from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { colors } from '@/constants/Colors';






const styles= StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 16,
        color: "graywhite",
    },
    title: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "bold",
    },

    subtitle: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "bold",
    },
    headline: {
        fontSize: 24,
        lineHeight: 16,
        fontWeight: "bold",
    },
    body: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "bold",
    },
    button: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold",
    },

})
    


type Props = TextProps &{
    variant?: keyof typeof styles,
    color?: keyof typeof colors["light"]
}


export function ThemeText ({variant, color, style, ...rest }:Props){
    const colors  = useThemeColors()
    return <Text  style={[ styles[variant ?? 'text'], {color: colors[color ?? "grayDark"]}, style]} {...rest}/>
}
       