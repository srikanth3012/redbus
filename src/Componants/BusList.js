import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import TrendingOffer from "./TrendingOffer";
import BusCard from "./BusCard";
import BusData from "./Busdata.json";

const BusList = () => {
  const navigate = useNavigate();
  const { from } = useParams();
  const { to } = useParams();
  const navigateHandler = () => {
    navigate("/Bus");
  };

  return (
    <>
      <div className="flex flex-col gap-2 pt-2 text-xs  bg-gradient-to-b from-orange-50 to-white  h-16">
        <div className="pl-10">
          {" "}
          Home<span>{">"}</span>Bus Ticket <span>{">"}</span>
          {from.toUpperCase()} to {to.toUpperCase()}
        </div>
        <div className="pl-10  text-lg  border-b-2 relative">
          {from.toUpperCase()} to {to.toUpperCase()}
        </div>
      </div>

      <div className="pl-10 p-2 pt-4 h-16 sticky top-0 text-lg font-semibold border-b-2 w-screen bg-white ">
        {from.toUpperCase()} to {to.toUpperCase()}
        <button
          className="border border-black px-3 py-1 ml-2 text-xs bg-orange-100 rounded-sm"
          onClick={() => navigateHandler()}
        >
          MODIFY
        </button>
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-screen">
          <div className="pl-5 pb-5">
            <TrendingOffer />
          </div>

          <div>
            {BusData?.map((item) => (
              <BusCard item={item} key={item.travelName} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusList;
