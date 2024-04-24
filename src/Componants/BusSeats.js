import React from "react";
import UpperSeats from "./UpperSeats";
import LowerSeats from "./LowerSeats";
import BusData from "./Busdata.json";
import { useParams } from "react-router-dom";
const BusSeats = ({ id }) => {
  const bus = BusData.filter((item) => item?.id == id);
  const busName = (bus[0]?.travelName).split(" ");
  const { from } = useParams();
  const { to } = useParams();
  const keyItem = from[0] + to[0];

  return (
    <>
      <div className="flex flex-col gap-5 justify-center ml-10 w-[300%] h-[35em] pl-52 ">
        <UpperSeats busName={busName[0] + keyItem} />
        <LowerSeats busName={busName[0] + keyItem} />
      </div>
    </>
  );
};

export default BusSeats;
