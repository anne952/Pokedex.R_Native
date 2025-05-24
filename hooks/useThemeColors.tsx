import { useColorScheme } from "react-native";
import { colors } from "../constants/Colors";

export function useThemeColors() {
    const themes = useColorScheme() ?? "light";
    return colors[themes];
}