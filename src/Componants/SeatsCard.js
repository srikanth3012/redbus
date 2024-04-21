import React, { useEffect, useState } from "react";
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
    if (ele === item + seats1) {
      bg1 = "gray-400";
    } else if (ele === item + seats2) {
      bg2 = "gray-400";
    } else if (ele === item + seats3) {
      bg3 = "gray-400";
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
