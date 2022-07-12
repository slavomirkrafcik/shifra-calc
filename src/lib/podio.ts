import { AppwriteService } from "./appwrite";

export const PodioService = {
  getItem: async (itemId: string) => {
    const token = await AppwriteService.getAccessToken();

    const response = await fetch("https://api.podio.com/item/" + itemId, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      console.log("Nemate pristup.");
      return 400;
    }
  },

  getUser: async () => {
    const token = await AppwriteService.getAccessToken();

    const response = await fetch("https://api.podio.com/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      console.log("Neansiel sa uzivatel.");
      return 400;
    }
  },
};
