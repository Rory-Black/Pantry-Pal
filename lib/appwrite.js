import { Client, Account } from 'react-native-appwrite';

const client = new Client();

client
  .setProject('68681a970000e0a8fc62')
  .setPlatform('dev.rory-black.pantry-pal');

export const account = new Account(client)