import { UserCredential } from "firebase/auth";
import { createContext, useContext } from "react";
import { FirebaseAuth } from "../lib/firebase-auth";
import useFirebaseAuth from "../lib/useFirebaseAuth";

const authUserContext = createContext<FirebaseAuth>({
  user: null,
  loading: true,
  login: (email: string, password: string): Promise<UserCredential> => {
    return Promise.resolve({} as UserCredential);
  },
  signup: (email: string, password: string): Promise<UserCredential> => {
    return Promise.resolve({} as UserCredential);
  },
  logout: async () => {},
});

export function AuthUserProvider({ children }: { children: React.ReactNode }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
