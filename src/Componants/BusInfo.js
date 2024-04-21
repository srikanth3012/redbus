import React, { useEffect, useState } from "react";
import BusSeats from "./BusSeats";
import DropandPickupPoint from "./DropandPickupPoint";
import Payment from "./Payment";
import { useSelector } from "react-redux";
import SeatsLegend from "./SeatsLegend";
import Form from "./Form";

const BusInfo = ({ id }) => {
  const [boardingPoint, setBoardingPoint] = useState("");
  const [dropPoint, setdropPoint] = useState("");
  const [PaymentToggle, setPaymentToggle] = useState(false);
  const Seats = useSelector((store) => store?.BusSeats?.Seats);
  const formToggle = useSelector((store) => store?.FormToggle?.formToggle);
  return (
    <>
      <div className="flex flex-row w-[88%] bg-gray-100 ml-16">
        <div>
          <BusSeats id={id} />
        </div>
        {Seats.length === 0 && <SeatsLegend />}
        {!PaymentToggle && Seats.length && (
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
            id={id}
          />
        )}
      </div>
      <div>{formToggle && <Form />}</div>
    </>
  );
};

export default BusInfo;
