import { UserCredential } from "firebase/auth";

export type FirebaseAuth = {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  signup: (email: string, password: string) => Promise<UserCredential>;
};

export type AuthUser = {
  uid: string;
  email: string | null;
};
