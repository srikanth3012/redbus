import React, { useEffect, useState } from "react";
import BusSeats from "./BusSeats";
import DropandPickupPoint from "./DropandPickupPoint";
import Payment from "./Payment";
import { useSelector } from "react-redux";
import SeatsLegend from "./SeatsLegend";
import Form from "./Form";
import BusData from "./Busdata.json";

const BusInfo = ({ id }) => {
  const [boardingPoint, setBoardingPoint] = useState("");
  const [dropPoint, setdropPoint] = useState("");
  const [PaymentToggle, setPaymentToggle] = useState(false);
  const formToggle = useSelector((store) => store?.FormToggle?.formToggle);
  const busSeats = useSelector((store) => store?.BusSeats?.Seats);
  const busDetails = BusData.filter((item) => item.id === id);

  return (
    <>
      <div className="flex flex-row w-[88%] bg-gray-100 ml-16">
        <div>
          <BusSeats id={id} />
        </div>
        {busSeats.length === 0 && <SeatsLegend />}
        {!PaymentToggle && busSeats.length && (
          <div>
            <DropandPickupPoint
              id={id}
              setPaymentToggle={setPaymentToggle}
              setBoardingPoint={setBoardingPoint}
              setdropPoint={setdropPoint}
              boardingPoint={boardingPoint}
              Seats={busSeats}
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
      <div>
        {formToggle && (
          <Form
            boardingPoint={boardingPoint}
            dropPoint={dropPoint}
            busDetails={busDetails}
            busSeats={busSeats}
            setPaymentToggle={setPaymentToggle}
            setBoardingPoint={setBoardingPoint}
          />
        )}
      </div>
    </>
  );
};

export default BusInfo;
