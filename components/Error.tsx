import React from "react";

export const Error = ({ error }: any) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>There was an error while loading</h1>
      <h1>{error.message}</h1>
    </div>
  );
};
