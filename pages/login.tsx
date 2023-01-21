import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Auth } from "../components/auth";

const Login: NextPage = () => {
  const [redirect, setRedirect] = useState("/");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setRedirect(query.get("redirect") || "/");
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Auth redirect={redirect} />
    </div>
  );
};

export default Login;
