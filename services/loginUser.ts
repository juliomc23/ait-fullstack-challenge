import { json } from "stream/consumers";
import { User } from "../interfaces/User";

import toast from "react-hot-toast";

export const loginUser = async ({ email, password }: User) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    if (!response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
