import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h3>Error Status : {err.status}</h3>
      <h3>Error Text : {err.statusText}</h3>
    </div>
  );
};

export default Error;
