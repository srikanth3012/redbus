import React, { useState } from "react";
import BusData from "./Busdata.json";

const DropandPickupPoint = ({
  id,
  setPaymentToggle,
  setBoardingPoint,
  setdropPoint,
  boardingPoint,
}) => {
  const busDetails = BusData.filter((ele) => ele?.id === id);
  const PickUpStages = busDetails[0]?.pickU_stages;
  const DropStages = busDetails[0]?.drop_stages;
  const locationHandler = (item) => {
    if (!boardingPoint) {
      setBoardingPoint(item);
    } else {
      setdropPoint(item);
      setPaymentToggle(true);
    }
  };
  return (
    <>
      <div className=" border border-gray-300 w-[100%] h-[27em] ml-[45%]  mt-16">
        <div className="flex text-center pl-10 border border-b-gray-300">
          <h1 className="text-lg font-semibold  px-2 py-2 ">BOARDING POINT</h1>
          <h1 className="text-lg font-semibold  px-2 py-2 ">DROPPING POINT</h1>
        </div>
        <div className="h-[24em] w-full overflow-x-scroll pl-5">
          {!boardingPoint &&
            PickUpStages?.map((item, i) => (
              <div
                key={i}
                className="list-none flex gap-10 m-2 px-5 py-2 cursor-pointer"
                onClick={() => locationHandler(item)}
              >
                <li>
                  <input type="checkbox" />
                </li>
                <li className="text-lg font-semibold">{item?.time}</li>
                <li className="text-lg flex flex-col">
                  {item?.location}
                  <span className="text-sm w-40 text-gray-500">
                    {item?.nearbt}
                  </span>
                </li>
              </div>
            ))}
          {boardingPoint &&
            DropStages.map((item, i) => (
              <div
                key={i}
                className="list-none flex gap-10 m-2 px-5 py-2 cursor-pointer"
                onClick={() => locationHandler(item)}
              >
                <li>
                  <input type="checkbox" />
                </li>
                <li className="text-lg font-semibold">{item?.time}</li>
                <li className="text-lg flex flex-col">
                  {item?.location}
                  <span className="text-sm w-40 text-gray-500">
                    {item?.nearby}
                  </span>
                </li>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DropandPickupPoint;
