import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addSeats, delSeats } from "../../uttils/BusSeatSlicer";

const SeatsCard = ({ item, busSeats }) => {
  const [seat1, setSeat1] = useState("transparent");
  const [seat2, setSeat2] = useState("transparent");
  const [seat3, setSeat3] = useState("transparent");
  const seat1Handler = (item) => {
    if (seat1 === "transparent") {
      busSeats.push(item);
      setSeat1("gray-300");
    } else {
      setSeat1("transparent");
    }
  };
  const seat2Handler = (item) => {
    if (seat2 === "transparent") {
      setSeat2("gray-300");
      busSeats.push(item);
    } else {
      setSeat2("transparent");
    }
  };
  const seat3Handler = (item) => {
    if (seat3 === "transparent") {
      setSeat3("gray-300");
      busSeats.push(item);
    } else {
      setSeat3("transparent");
    }
  };
  return (
    <div className="flex justify-between">
      <button
        className={`flex w-5 h-8 m-1 border border-gray-500 rounded-sm bg-${seat1}`}
        id={item + "1"}
        onClick={() => seat1Handler(item + "1")}
      >
        <span className="w-2.5 h-1.5 ml-[18%]  border border-gray-500 rounded-sm"></span>
      </button>
      <div className="flex">
        {" "}
        <button
          className={`flex w-5 h-8 m-1 border border-gray-500 rounded-sm bg-${seat2}`}
          onClick={() => seat2Handler(item + "2")}
        >
          <span className="w-2.5 h-1.5 ml-[18%] border border-gray-500 rounded-sm"></span>
        </button>
        <button
          className={`flex w-5 h-8 m-1 border border-gray-500 rounded-sm bg-${seat3}`}
          onClick={() => seat3Handler(item + "3")}
        >
          <span className="w-2.5 h-1.5 ml-[18%] border border-gray-500 rounded-sm"></span>
        </button>
      </div>
    </div>
  );
};

export default SeatsCard;
