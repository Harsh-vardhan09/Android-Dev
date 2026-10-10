import "react-native-url-polyfill/auto";
import { Client, Account, Avatars } from "react-native-appwrite";

const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
const packageName = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;

export const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setPlatform(packageName);

export const account = new Account(client);
export const avatars = new Avatars(client);
