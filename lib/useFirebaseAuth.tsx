import { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { AuthUser, FirebaseAuth } from "./firebase-auth";
import { useRouter } from "next/router";

const formatAuthUser = (user: User): AuthUser => ({
  uid: user.uid,
  email: user.email,
});

const protectedRoutes = ["/settings", "/schedules", "/channels"];
export default function useFirebaseAuth(): FirebaseAuth {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const authStateChanged = async (authState: User | null) => {
    if (!authState) {
      setLoading(false);
      if (protectedRoutes.includes(router.pathname)) {
        router.push("/login");
      }
      return;
    }

    setLoading(true);

    var formattedUser = formatAuthUser(authState);

    setUser(formattedUser);

    setLoading(false);
  };

  const clear = () => {
    setUser(null);
    setLoading(true);
  };

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth).then(clear);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    login,
    signup,
    logout,
  };
}
