import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/UseBooks";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";

const BooksDetails = () => {
  const [book, setBook] = useState(null);

  const { id } = useLocalSearchParams();
  const { fetchBookById } = useBooks();

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />
        <ThemedText title={true}>Book Description: </ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default BooksDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
