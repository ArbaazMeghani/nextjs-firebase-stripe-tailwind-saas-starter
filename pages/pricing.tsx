import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useProducts from "../hooks/useProducts";
import firebase from "../firebase/firebase-config";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase.app());
const Pricing: NextPage = () => {
  const [user] = useAuthState(auth);
  const products = useProducts();
  const router = useRouter();

  const onSubscribe = async (priceId: string) => {
    if (!user) {
      router.push(`/login?redirect=checkout?price_id=${priceId}`);
    } else {
      router.push(`/checkout?price_id=${priceId}`);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      Pricing
      <button onClick={() => onSubscribe(products[0].prices[0].id)}>buy</button>
    </div>
  );
};

export default Pricing;
