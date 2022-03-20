import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import usePremiumUser from "../hooks/usePremiumUser";
import { manage } from "../stripe/stripe-client";

const Admin: NextPage = () => {
  const [user, premium, loading, error] = usePremiumUser();
  const router = useRouter();

  const onManage = async () => {
    const session = await manage();
    router.push(session.url);
  };

  useEffect(() => {
    if (!loading) {
      if (!user && !error) {
        router.push("/landing");
      } else if (user && !premium) {
        router.push("/pricing");
      }
    }
  }, [user, premium, loading, error]);

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <h1>Admin</h1>
      <button onClick={onManage}>Manage Payments</button>
    </div>
  );
};

export default Admin;
