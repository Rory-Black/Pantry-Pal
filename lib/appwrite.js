import { Client, Account, Databases } from 'react-native-appwrite';

const client = new Client()
  .setProject('68681a970000e0a8fc62')
  .setPlatform('dev.rory-black.pantry-pal');

export const account = new Account(client)
export const databases = new Databases(client)