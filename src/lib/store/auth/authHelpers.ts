import { auth } from "@/lib/firebase/firebase";

export const getUserToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  return user ? await user.getIdToken() : null;
};
