import { StyleSheet, Text, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from 'expo-router'
import Logo from '../assets/img/logo.jpg'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={Logo} style={{marginVertical:20, height:100,width:100}}/>
      <Text style={styles.title}>The numner 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading list app</Text>

      <View style={styles.card}>
        <Text>
            Hello this is a card
        </Text>
      </View>

      <Link href="/about" style={styles.Link}>About page</Link>
      <Link href="/contact" style={styles.Link}>contact page</Link>

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card:{
    backgroundColor:"#eee",
    padding:20,
    borderRadius:5,
    boxShadow:'4px 4px rgba(0,0,0,0.1)'
  },
  Link:{
    marginVertical:10,
  }
});
