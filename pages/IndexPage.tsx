import React from "react";
import App from "./../App";
import { Alert, AppRegistry, Button, Image, ImageBackground, StyleSheet, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PaperProvider, Text } from "react-native-paper";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function IndexPage() {
  // const logo = require("../src/images/heraldic-gold-lion.png");
  const logo = require("../src/images/icons/icons8-tower-64.png");
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}> LE PROTECTORAT </Text>
        <Image source={logo} style={styles.logo}/>
      </View>
      <ScrollView style={styles.loginForm}>
        <TextInput
          name="login"
          placeholder="login"
          style={styles.input}
          onChangeText={onChangeText}
        />
        <TextInput
          name="Mot de passe"
          placeholder="Mot de passe"
          style={styles.input}
          onChangeText={onChangeText}
        />
        <Button
          onPress={() => Alert.alert('Bouton de connexion cliqué!')}
          title="Learn More"
          color="rgb(250,200,40)"
          accessibilityLabel="Press the button to connect"
          style={styles.loginButton}
        />
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(45,45,45)',
    paddingTop: 100,
    padding: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo:{
    resizeMode: "contain",
    objectFit: 'scale-down',
    backfaceVisibility: 'hidden',
    tintColor: 'rgb(250,200,40)',
  },
  title: {
    fontWeight: '500',
    marginVertical: 10,
    color: 'rgb(250,200,40)',
  },
  loginForm: {

  },
  input: {
    borderRadius: 10,
    backgroundColor: 'rgb(60,60,60)',
    color: 'rgb(220,220,220)',
    textAlign: 'center',
    height: 40,
    width: 300,
    margin: 6,
    borderWidth: 1,
    borderColor: 'rgb(250,200,40)',
    padding: 5,
  },
  loginButton: {
    color: 'rgb(220,220,220)',
    backgroundColor: 'rgb(250,200,40)',
  }
});