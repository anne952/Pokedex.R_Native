import { Link } from "expo-router";
import {Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ThemeText } from "../components/ThemeText";
import {Card} from "@/components/card";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
              <Image source={require('@/assets/images/iconoir_pokeball.png')} width={24} height={24} />
              <ThemeText variant="headline" color="grayDark"> Pokemon</ThemeText>

      </View>

      <Card style={styles.body}></Card>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgb(206, 53, 53)',
    flex: 1,  
    padding: 4, 
   },

   text :{
    padding: 5,
    flexDirection: 'row',
   },

   body:{
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flex: 1,
   }
})
