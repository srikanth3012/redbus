import React, { useState } from "react";
import BusInfo from "./BusInfo";
import { emptySeats } from "../Utills/BusSeatSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BusCard = ({ item }) => {
  const [busSeats, setBusSeats] = useState(false);
  const dispatch = useDispatch();
  const busName = (item?.travelName).split(" ");
  const { from } = useParams();
  const { to } = useParams();
  const keyItem = busName[0] + from[0] + to[0];
  const confirmSeats = useSelector(
    (store) => store?.BusCheckOut?.confirmeSeats
  );
  const Slength =
    confirmSeats &&
    confirmSeats.filter((ele) => {
      const name = ele?.seats[0].split("-");
      if (name[0] == keyItem) {
        return item;
      }
    });
  const navigateHandler = () => {
    setBusSeats(!busSeats);
    dispatch(emptySeats());
  };
  const seats = item?.seats - Slength.length;
  return (
    <>
      <div className="flex flex-col w-[90%] ml-[5%]  m-2 border border-gray-200 rounded-xl md:rounded-none shadow-lg md:shadow-none">
        <img
          alt="Primo"
          src="https://s3.rdbuz.com/Images/webplatform/india/primo/primoLogo.svg"
          className="w-20 h-8 mt-2"
        />
        <div className="flex pt-1">
          <div className=" text-left w-40 flex flex-col gap-6 pl-2">
            <h1 className="w-[180%] font-bold">{item.travelName}</h1>
            <h1 className="text-xs text-gray-500">
              {item.busType} {item.seatType}
            </h1>
          </div>
          <div className="flex justify-evenly text-lg w-[80%] h-20 ml-4 ">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">{item.startTime}</h1>
              <h1 className="text-xs text-gray-500">{item.startlocation}</h1>
            </div>
            <div>
              <h1 className="text-xs mt-[30%] hidden md:flex">
                {item.duration}
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold ">{item.reachTime}</h1>
              <h1 className="text-xs text-gray-500">{item.dropLocation}</h1>
            </div>
            <div>
              <span className="text-sm w-20">Starts from</span>
              <h1 className="flex text-sm mt-2">
                INR
                <span className="text-lg font-semibold -mt-1 ml-0.5">
                  {item.Price}
                </span>
              </h1>
            </div>
            <h1 className="text-xs text-gray-500 mt-10 hidden md:flex">
              Available Seats :{seats}
            </h1>
          </div>
        </div>

        <div className=" gap-5 pl-2 hidden md:flex">
          <div className="flex gap-1 mt-5 ">
            <img
              alt="busIcon"
              src="https://th.bing.com/th/id/OIP.eKp1FL8E2uXv4zzC-enmPgHaHa?w=194&h=194&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7"
              className="w-5 h-5"
            />
            <img
              alt="bottle"
              src="https://th.bing.com/th/id/OIP.7pjBiLEV3cf2QRCpHncQ2AHaHa?w=187&h=187&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7"
              className="w-5 h-5"
            />
            <img
              alt="wifi"
              src="https://th.bing.com/th/id/OIP.z6lYlXTaCZMBI1k_uVTfywHaHa?w=212&h=200&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7"
              className="w-5 h-5"
            />
            <img
              alt="charge point"
              src="https://th.bing.com/th/id/OIP.tZt3PCAjNLlEoIJjM0JTIAHaHa?w=214&h=214&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7"
              className="w-5 h-5"
            />{" "}
          </div>
          <div className="mt-5 text-xs bg-orange-50 px-2 py-1">
            <h1>Live Tracking</h1>
          </div>
          <div className="mt-5 text-red-600">
            <h1>Exclusive discounts available for women passengers</h1>
          </div>
        </div>
        <div className="flex justify-end  ">
          <button
            className="px-2 py-1 bg-red-700 h-8 w-28 text-white"
            onClick={() => navigateHandler(item?.id)}
          >
            {!busSeats ? "VIEW SEATS" : "Hide Seats"}
          </button>
        </div>
      </div>
      {busSeats && (
        <div>
          <BusInfo id={item?.id} />
        </div>
      )}
    </>
  );
};

export default BusCard;
