import { getAuth } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loading } from "../components/Loading";
import * as Stripe from "../stripe/stripe-client";
import firebase from "../firebase/firebase-config";

const auth = getAuth(firebase.app());
const checkout: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const startCheckout = async (priceId: string) => {
      const session = await Stripe.checkout(priceId);
      router.push(session.url);
    };

    const query = new URLSearchParams(window.location.search);
    const priceId = query.get("price_id");

    if (!priceId || error) {
      router.push("/");
    } else if (user) {
      startCheckout(priceId);
    }
  }, [user, loading, error]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Loading />
    </div>
  );
};

export default checkout;
