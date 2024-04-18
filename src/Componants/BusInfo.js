import React, { useEffect, useState } from "react";
import BusSeats from "./BusSeats";
import DropandPickupPoint from "./DropandPickupPoint";
import Payment from "./Payment";

const BusInfo = ({ id }) => {
  const [seatsArr, setSeatsArr] = useState([]);
  const busSeats = [];
  const [boardingPoint, setBoardingPoint] = useState("");
  const [dropPoint, setdropPoint] = useState("");
  const [PaymentToggle, setPaymentToggle] = useState(false);
  useEffect(() => setSeatsArr([busSeats]), [busSeats.length]);
  return (
    <div className="flex flex-row w-[88%] bg-gray-100 ml-16">
      <div>
        <BusSeats busSeats={busSeats} />
      </div>
      {!PaymentToggle && seatsArr.length && (
        <div>
          <DropandPickupPoint
            id={id}
            setPaymentToggle={setPaymentToggle}
            setBoardingPoint={setBoardingPoint}
            setdropPoint={setdropPoint}
            boardingPoint={boardingPoint}
          />
        </div>
      )}
      {PaymentToggle && (
        <Payment
          boardingPoint={boardingPoint}
          dropPoint={dropPoint}
          busSeats={busSeats}
        />
      )}
    </div>
  );
};

export default BusInfo;
