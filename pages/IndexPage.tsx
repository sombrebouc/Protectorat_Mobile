import App from "./../App";
import { AppRegistry, Image, ImageBackground, StyleSheet, View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export default function IndexPage() {
  const logo = require("../src/images/heraldic-gold-lion.png");
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.logo}>
      <Text style={styles.title}> PAGE INDEX </Text>
    </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: 'rgb(45,45,45)',
    // padding: 'auto',
    // justifyContent: 'center',
    // textAlign: "left"
  },
  logo:{flex: 1,
    resizeMode: "contain",
    width: "100%",
    alignItems: "center",
    backgroundColor: 'rgb(45,45,45)',
  },
  title: {
    color: "white",
    fontWeight: '500',
    // textAlign: 'center'
  }
});