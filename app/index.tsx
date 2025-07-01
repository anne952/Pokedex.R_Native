import { Link } from "expo-router";
import {Image, StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { colors } from "../constants/Colors";
import { ThemeText } from "../components/ThemeText";
import {Card} from "@/components/card";

export default function Index() {

  const pokemons =Array.from({length:35}, (_, k) =>({
    name: 'pokémon name',
    id: k+1
  }))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
              <Image source={require('@/assets/images/iconoir_pokeball.png')} width={24} height={24} />
              <ThemeText variant="headline" color="grayDark"> Pokemon</ThemeText>

      </View>

      <Card style={styles.body}>
        <FlatList 
        data={pokemons} 
        numColumns={3}
        columnWrapperStyle={styles.gripGap}
        contentContainerStyle={[styles.gripGap, styles.list]}
        renderItem={({item})=><Card style={{flex:1/3, height:200}}>
        <Text>{item.name}</Text>
         </Card>} keyExtractor={(item)=> item.id.toString()} />
      </Card>
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
    backgroundColor: colors.light.grayWhite,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flex: 1,
   },

   gripGap:{
    gap: 8,
   },

    list:{
      padding: 10,
    }
})
