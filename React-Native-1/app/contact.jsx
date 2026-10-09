import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Link href={"/"} style={styles.Link}>Home</Link>
    </View>
  )
}

export default Contact

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
