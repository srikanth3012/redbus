import React from "react";
import UpperSeats from "./UpperSeats";
import LowerSeats from "./LowerSeats";

const BusSeats = () => {
  return (
    <div className="flex flex-col gap-2 justify-center  ml-16 w-[90%] h-[35em] bg-gray-100 pl-52 ">
      <UpperSeats />
      <LowerSeats />
    </div>
  );
};

export default BusSeats;
