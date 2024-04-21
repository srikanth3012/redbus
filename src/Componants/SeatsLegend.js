import React from "react";
import Seat from "./Seat";

const SeatsLegend = () => {
  return (
    <div className="flex flex-col gap-3 w-[100%] h-[27em] ml-[30%]  mt-20 text-gray-500">
      <h1 className="text-black font-semibold text-lg">SEATS LEGEND</h1>
      <div className="flex">
        {" "}
        <Seat item={1} bg={"transparent"} />
        <h1 className="mt-2 text-sm">Available</h1>
      </div>

      <div className="flex">
        <Seat item={1} bg={"gray-400"} />
        <h1 className="mt-2 text-sm">Unavailable</h1>
      </div>
      <div className="flex">
        <Seat item={1} bg={"pink-400"} />
        <h1 className="mt-2 text-sm">Female</h1>
      </div>
    </div>
  );
};

export default SeatsLegend;
