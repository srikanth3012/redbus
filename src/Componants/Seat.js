import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSeats, delSeats } from "../Utills/BusSeatSlicer";

const Seat = ({ item, bg }) => {
  const [seat1, setSeat1] = useState(bg);

  const dispatch = useDispatch();

  const seat1Handler = (item) => {
    if (seat1 === "transparent") {
      dispatch(addSeats(item));
      setSeat1("gray-300");
    } else {
      setSeat1("transparent");
      dispatch(delSeats(item));
    }
  };
  return (
    <>
      <button
        className={`flex w-5 h-8 m-1 border border-gray-500 rounded-sm bg-${seat1}`}
        id={item}
        onClick={() => seat1Handler(item)}
        disabled={seat1 === "gray-400"}
      >
        <span className="w-2.5 h-1.5 ml-[18%] text-xs  border border-gray-500 rounded-sm"></span>
      </button>
    </>
  );
};

export default Seat;
