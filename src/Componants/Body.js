import React, { Suspense } from "react";
import Bheader from "./Bheader";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="font-sans">
      <Bheader />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Body;
