import "react-native-url-polyfill/auto";
import { Client, Account, Avatars, TablesDB } from "react-native-appwrite";

const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;

export const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId)
  
export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases=new TablesDB(client);


