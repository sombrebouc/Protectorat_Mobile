import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import data from '../src/datas/characters.json';

export default function CharacterPage() {

const perso = data[0];
const portrait = require(`../src/images/portraits/gautierC.jpg`)

  return (
    <View style={styles.container}>
      <View style={styles.portraits}>
        <Image source={portrait} style={styles.portraits}/>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>MY NAME IS</Text>
        <Text style={styles.firstname}>Joueur: { perso.playerFirstname } { perso.playerLastname }</Text>
        <Text style={styles.firstname}>Points: { perso.playerGameXps } XPs</Text>
        <Text style={styles.firstname}>Personnage: { perso.charatLastname} { perso.charactFirstname}</Text>
        <Text style={styles.firstname}>Age: { perso.charactAge }ans</Text>
        <Text style={styles.firstname}>Contrée: { perso.charactCountry }</Text>
        <Text style={styles.firstname}>Village: { perso.characterVillage }</Text>
        <Text style={styles.firstname}>Fonction: { perso.charactStatus }</Text>
        <Text style={styles.firstname}>Totem: { perso.charactTotem }</Text>
        <Text style={styles.firstname}>Ethnie: { perso.charactEthny }</Text>
        <Text style={styles.firstname}>Race: { perso.charactRace }</Text>
        <Text style={styles.firstname}>Groupe: { perso.charactOrigins }</Text>
        <Text style={styles.firstname}>Campement: { perso.charcatFaction }</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(45,45,45)',
    padding: 0,
  },
  containerInfos:{
    padding: 15,
    textAlign: "left"
  },
  title: {
    color: "white",
    fontWeight: '500',
    // textAlign: 'center'
  },
  firstname:{
    color:"rgb(190,200,190)",
    fontWeight: '400',
    fontSize: 14,
  },
  portraits:{
    resizeMode: "cover",
    width:'auto',
    padding: 0,
    margin: 0,
    height:200
  }
});
