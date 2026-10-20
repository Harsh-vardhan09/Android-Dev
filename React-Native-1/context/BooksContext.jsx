import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();

const DATABASE_ID = "6ad795c7001967d6b93b";
const TABLE_ID = "6ad7964c001e9403ed6a";

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listRows({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        queries:[
            Query.equal('user_id',user.$id)
        ]
      })

      setBooks(response.rows)
      console.log(response.rows);

    } catch (error) {
      console.error(error);
    }
  }

  async function fetchBooksById(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          ...data,
          user_id: user.$id, // Appends the current user ID mapping
        },
        permissions: [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    if(user){
        fetchBooks()
    }else{
        setBooks([])
    }
  },[user])
  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBooksById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
