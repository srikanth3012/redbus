import React from "react";
import SeatsCard from "./SeatsCard";

const UpperSeats = ({ setBusSeats, busSeats }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="w-[18%] h-[35em] bg-white rotate-90  ">
      <h1 className="text-lg text-white font-semibold text-center bg-gray-700 py-1">
        Upper Seats
      </h1>
      <div className="m-5 w-[65%] ml-[16%]">
        {arr.map((item) => (
          <SeatsCard
            item={"U" + item}
            key={item}
            setBusSeats={setBusSeats}
            busSeats={busSeats}
          />
        ))}
      </div>
    </div>
  );
};
export default UpperSeats;
