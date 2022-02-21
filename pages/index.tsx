import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import usePremiumUser from "../hooks/usePremiumUser";

const Home: NextPage = () => {
  const [user, premium, loading, error] = usePremiumUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user && !error) {
        router.push("/landing");
      } else if (user && !premium) {
        router.push("/pricing");
      }
    }
  }, [user, premium, loading, error]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      App
    </div>
  );
};

export default Home;
