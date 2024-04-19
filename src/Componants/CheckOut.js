import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { id } = useParams();
  const data = useSelector((store) => store?.BusCheckOut?.CheckOut);
  const details = id ? data.filter((item) => item.id == id) : data;
  const boarding = details[0]?.boardingPoint;
  const drop = details[0]?.dropPoint;

  return (
    <div className="ml-[30%] w-[40em] bg-gray-300 h-[25em] px-5 py-5 mt-5 shadow-2xl">
      <h1 className="text-2xl ml-[5%] ">
        THANK YOU FOR CHOOSING <span className="text-red-700">RED BUS</span>
      </h1>
      <h1 className="text-xl ml-[30%] mt-10">Your Journey Details</h1>
      <div className="flex gap-5 ml-[9%] mt-5">
        <div className="flex">
          <h1 className="text-lg w-60 ">
            {details[0]?.busName}
            <span className="text-sm ml-1">{details[0]?.seatType}</span>
          </h1>
        </div>
        <h1 className="list-none flex gap-2  ml-[4%]">
          seat :
          {details[0].seats.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </h1>
      </div>
      <div className="flex mt-2 ml-[9%]">
        {" "}
        <div className="flex my-2 ">
          <h1 className="flex flex-col mr-2">
            {boarding?.location}
            <span className="text-xs w-32">{boarding?.nearbt}</span>
          </h1>
          <h1>{boarding?.time}</h1>
        </div>
        <h1 className="my-2 ml-10">To</h1>
        <div className="flex ml-[10%]">
          <h1 className="flex flex-col mr-2">
            {drop?.location}
            <span className="text-xs w-32">{drop?.nearby}</span>
          </h1>
          <h1>{drop?.time}</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
