import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors.js";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/UserContext.jsx";
import { BooksProvider } from "../context/BooksContext.jsx";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.nav,
            },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        </Stack>
      </BooksProvider>
    </UserProvider>
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
