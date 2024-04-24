import React from "react";
import Seat from "./Seat";
import { useSelector } from "react-redux";

const SeatsCard = ({ item, count }) => {
  const seats1 = parseInt(count) - 2;
  const seats2 = parseInt(count) - 1;
  const seats3 = parseInt(count);
  let bg1 = "transparent";
  let bg2 = "transparent";
  let bg3 = "transparent";
  const confirmSeats = useSelector(
    (store) => store?.BusCheckOut?.confirmeSeats
  );

  confirmSeats?.map((ele) => {
    if (ele?.seats == item + seats1) {
      if (ele?.gender == "Male") bg1 = "gray-400";
      else bg1 = "pink-400";
    } else if (ele?.seats == item + seats2) {
      if (ele?.gender == "Male") bg2 = "gray-400";
      else bg2 = "pink-400";
    } else if (ele?.seats == item + seats3) {
      if (ele?.gender == "Male") bg3 = "gray-400";
      else bg3 = "pink-400";
    }
  });

  return (
    <div className="flex justify-between">
      <Seat item={item + seats1} bg={bg1} />
      <div className="flex">
        {" "}
        <Seat item={item + seats2} bg={bg2} />
        <Seat item={item + seats3} bg={bg3} />
      </div>
    </div>
  );
};

export default SeatsCard;
