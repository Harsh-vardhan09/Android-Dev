import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor:'#ddd',
      },
      headerTintColor:'#333'
    }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact",headerShown:false }} />
    </Stack>
  );
};

/*
stack
 |
 |
 |
 |Index
 */

export default RootLayout;

const styles = StyleSheet.create({});
