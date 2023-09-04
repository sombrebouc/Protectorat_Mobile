import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import CharacterPage from './pages/CharacterPage';
import HistoricalPage from './pages/HistoricalPage';
import IndexPage from './pages/IndexPage';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Personnage">
        <Drawer.Screen name="Index" component={IndexPage} options={{ title: 'Accueil', headerStyle: { backgroundColor: 'rgb(250,200,40)',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',}, }} />
        <Drawer.Screen name="Character" component={CharacterPage} options={{ title: 'Fiche Joueur', headerStyle: { backgroundColor: 'rgb(250,200,40)',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',}, }} />
        <Drawer.Screen name="History" component={HistoricalPage}  options={{ title: 'Historique', headerStyle: { backgroundColor: 'rgb(250,200,40)',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',}, }}/>
      </Drawer.Navigator>
      </NavigationContainer>
  );
}


// **************************** STYLE **************************** //
 
const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    backgroundColor: 'rgb(45,45,45)',
    padding: 25,
    justifyContent: 'center',
    textAlign: "left"
  }
});
