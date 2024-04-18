import React from "react";
import UpperSeats from "./UpperSeats";
import LowerSeats from "./LowerSeats";

const BusSeats = () => {
  return (
    <div className="flex flex-col gap-10 justify-center ml-16 w-[300%] h-[35em] pl-52 ">
      <UpperSeats />
      <LowerSeats />
    </div>
  );
};

export default BusSeats;
