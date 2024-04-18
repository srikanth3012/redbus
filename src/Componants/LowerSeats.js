import React from "react";
import SeatsCard from "./SeatsCard";

const LowerSeats = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-[18%] h-[35em] bg-white rotate-90 -mt-52  ">
      <h1 className="py-1 text-lg text-white font-semibold text-center bg-gray-700">
        Lower Seats
      </h1>
      <div className="m-5 w-[65%] ml-[16%]">
        {arr.map((item) => (
          <SeatsCard item={"L" + item} key={item} />
        ))}
        <hr />
        <img
          alt="stering"
          src="https://th.bing.com/th/id/OIP.oOLJfCBicMPM6Co6Ahz_RAHaHa?w=193&h=193&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7"
          className="w-8 h-8 mt-2"
        />
      </div>
    </div>
  );
};

export default LowerSeats;
