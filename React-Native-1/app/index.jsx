import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

//Themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />
      <ThemedText style={styles.title} title={true}>
        The number 1
      </ThemedText>
      <Spacer height={20} />
      <ThemedText>Reading list app</ThemedText>
      <Spacer />
      <View style={styles.card}>
        <Text>Hello this is a card</Text>
      </View>

      <Link href="/login" style={styles.Link}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/profile" style={styles.Link}>
        <ThemedText>profile</ThemedText>
      </Link>

      
    </ThemedView>
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
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  Link: {
    marginVertical: 10,
  },
});
