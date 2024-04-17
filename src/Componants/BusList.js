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
      <div className="text-xs bg-orange-50 bg-gradient-to-b pl-10 py-2 ">
        Home<span>{">"}</span>Bus Ticket <span>{">"}</span>
        {from.toUpperCase()} to {to.toUpperCase()}
      </div>
      <div className="pl-10 py-1 text-lg border border-b">
        {from.toUpperCase()} to {to.toUpperCase()}
      </div>
      <div className="pl-10 p-2 sticky top-0 text-lg font-semibold border border-b  w-screen bg-white">
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