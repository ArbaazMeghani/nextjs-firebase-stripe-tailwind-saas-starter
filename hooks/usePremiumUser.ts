import { useEffect, useState } from "react";
import { isUserPremium } from "../stripe/stripe-client";
import { getAuth, User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/firebase-config";

type PremiumUser = Array<User | Boolean | Error | null | undefined>;

const auth = getAuth(firebase.app());
const usePremiumUser = (): PremiumUser => {
  const [user, userLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const checkPremiumStatus = async () => {
      setStatus(await isUserPremium());
      setLoading(false);
    };
    if (user) {
      checkPremiumStatus();
    } else if (!userLoading || error) {
      setLoading(false);
    }
  }, [user, userLoading, error]);

  return [user, status, loading, error];
};

export default usePremiumUser;
