import React from "react";
import { useSelector } from "react-redux";

const Payment = ({ boardingPoint, dropPoint }) => {
  const BusSeats = useSelector((store) => store?.BusSeats?.Seats);
  const length = BusSeats.length;
  const price = length * 1500;
  return (
    <div className=" bg-gray-200 shadow-2xl w-96 pl-3 pt-10 mt-16 ml-[20%] h-[29em] ">
      <h1 className="text-xl font-semibold pl-2 ">Boarding & Dropping Point</h1>
      <div className="list-none flex px-5 my-2 mt-5 justify-between">
        <li className="flex flex-col text-xl ">
          {boardingPoint?.location}
          <span className="text-sm text-gray-500">{boardingPoint?.nearbt}</span>
        </li>
        <li className="text-lg font-bold">{boardingPoint?.time}</li>
      </div>
      <div className="list-none flex px-5 my-2 justify-between">
        <li className="flex flex-col text-xl ">
          {dropPoint?.location}
          <span className="text-sm text-gray-500 ">{dropPoint?.nearby}</span>
        </li>
        <li className="text-lg font-bold">{dropPoint?.time}</li>
      </div>
      <hr />
      <div className="flex justify-between px-5 py-4">
        <h1 className="text-lg font-semibold">Seat No.</h1>
        <h1 className="list-none flex gap-1">
          {BusSeats.map((item) => (
            <li>{item}</li>
          ))}
        </h1>
      </div>
      <hr />
      <div className="px-5">
        <h1 className="text-lg font-bold">Fare Details</h1>
        <div className="flex justify-between">
          <h1 className="">
            Amount{" "}
            <span className="text-xs text-gray-600">{length} * 1500</span>
          </h1>
          <h1 className="text-lg font-bold">INR {price}.00</h1>
        </div>
      </div>
      <div className="mt-8 mr-3">
        <button
          className="w-full h-10 bg-red-500 font-semibold"
          //   onClick={navigateHandler}
        >
          PROCEED TO BOOK
        </button>
      </div>
    </div>
  );
};

export default Payment;
