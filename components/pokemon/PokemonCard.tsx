import { ViewStyle } from "react-native"
import { Card } from "../card"
import { ThemeText } from "../ThemeText"

type Props ={
    style?: ViewStyle,
    id: number,
    name: string
}

export function PokemonCard({ style, id, name }: Props) {
    return(
        <Card style={style}>
            <ThemeText variant="caption" color="grayMedium">#{id.toString().padStart(3, '0') }</ThemeText>
        </Card>
    )
}