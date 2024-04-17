import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addSeats, delSeats } from "../../uttils/BusSeatSlicer";

const SeatsCard = ({ item }) => {
  const [seat1, setSeat1] = useState("transparent");
  const [seat2, setSeat2] = useState("transparent");
  const [seat3, setSeat3] = useState("transparent");
  //   const dispatch = useDispatch();
  //   const seats = useSelector((store) => store?.BusSeats?.Seats);

  //   let seatslength = seats.length;

  const seat1Handler = (id) => {
    if (seat1 === "transparent") {
      //   dispatch(addSeats(id));
      console.log(seat1);
      setSeat1("gray-400");
    } else {
      console.log(seat1);
      setSeat1("transparent");
      //   dispatch(delSeats(id));
    }
  };
  const seat2handler = (id) => {
    if (seat2 === "transparent") {
      setSeat2("gray-400");
      //   dispatch(addSeats(id));
    } else {
      setSeat2("transparent");
      //   dispatch(delSeats(id));
    }
  };
  const seat3handler = (id) => {
    if (seat3 === "transparent") {
      setSeat3("gray-400");
      //   dispatch(addSeats(id));
    } else {
      setSeat3("transparent");
      //   dispatch(delSeats(id));
    }
  };

  return (
    <div className="flex justify-between">
      <button
        className={` flex w-5  h-8 m-2 mt-3 border border-black bg-${seat1} rounded-sm`}
        id={item + "1"}
        onClick={() => seat1Handler(item + "1")}
      >
        <span className="w-2 h-1 border border-black ml-[5px] rounded-sm"></span>
      </button>
      <div className="flex  m-1">
        <button
          className={` flex w-5 h-8 m-2 border border-black bg-${seat2} rounded-sm`}
          id={item + "2"}
          onClick={() => seat2handler(item + "2")}
        >
          <span className="w-2 h-1 border border-black ml-[4.5px] rounded-sm"></span>
        </button>
        <button
          className={` flex w-5 h-8 mt-2 border border-black bg-${seat3} rounded-sm`}
          id={item + "3"}
          onClick={() => seat3handler(item + "3")}
        >
          <span className="w-2 h-1 border border-black ml-[4.5px] rounded-sm"></span>
        </button>
      </div>
    </div>
  );
};

export default SeatsCard;
