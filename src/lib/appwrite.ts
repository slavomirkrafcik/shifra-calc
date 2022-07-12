import { goto } from "$app/navigation";
import { Client, Account } from "appwrite";
import { writable } from "svelte/store";

const client = new Client();
const account = new Account(client);

// Init your Web SDK
client
  .setEndpoint("https://appwrite.shifra-calc.eu/v1") // Your API Endpoint
  .setProject("shifra-calc"); // Your project ID

export let user: any = writable(null);
export let itemId: any = writable(null);

export const AppwriteService = {
  login: async () => {
    account.createOAuth2Session("podio", "https://shifra-calc.eu/");
  },

  getAccessToken: async () => {
    const session = await account.getSession("current");
    const token = session.providerAccessToken;
    return token;
  },

  fetchUser: async () => {
    try {
      user.set(await account.get());
    } catch {
      user.set(null);
    }
  },

  logout: async () => {
    await account.deleteSession("current");
    user.set(null);
    goto("/");
  },
};
