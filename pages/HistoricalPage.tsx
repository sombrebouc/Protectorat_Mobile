import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import characterStory from '../src/datas/charactHistoricals/gautierC_charactHisto.json';
import character from '../src/datas/characters.json';
import { ScrollView } from 'react-native-gesture-handler';

export default function HistoricalPage() {
    const story = characterStory[0];
    const perso = character[0]
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>Légende ancienne</Text>
                <Text style={styles.paragraphs} >{story.background}</Text>
            <Text style={styles.title}>Rite de passage à l'âge adulte</Text>
                <Text style={styles.paragraphs} >{story.adultRitual}</Text>
            <Text style={styles.title}>Histoire de {perso.charactFirstname}</Text>
                <Text style={styles.paragraphs} >{story.background}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(45,45,45)',
      padding: 15,
      justifyContent: 'center',
      textAlign: "left"
    },
    title: {
      color: "white",
      fontSize: 16,
      fontWeight: '400',
      paddingBottom: 5,
      paddingTop: 10,
    },
    paragraphs:{
        color: "rgb(200,200,200)",
        fontSize: 14,
        fontWeight: '200',
        textAlign: 'justify',
    }
  });