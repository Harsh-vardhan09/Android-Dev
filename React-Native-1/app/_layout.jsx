import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors.js";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
    <StatusBar value='auto'/>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.nav,
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact"}}
        />
      </Stack>
    </>
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
