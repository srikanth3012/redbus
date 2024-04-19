import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyTickets = ({ SetOrders }) => {
  const details = useSelector((store) => store?.BusCheckOut?.CheckOut);

  const navigate = useNavigate();

  const navigateHandler = (id) => {
    SetOrders(false);
    navigate(`/BusList/checkout/${id}`);
  };

  return (
    <div className="">
      <h1 className="flex justify-center font-bold text-lg bg-gray-600 text-white py-2">
        Tickets
      </h1>
      {details.length === 0 ? (
        <div className="flex text-3xl text-gray-500 justify-center pt-20">
          No Tickets
        </div>
      ) : (
        details?.map((item) => (
          <div
            className="ml-[5em] w-[40em] bg-gray-300 h-[5em] px-1 py-1 mt-5  shadow-2xl"
            key={item?.id}
            id={item?.id}
            onClick={() => navigateHandler(item?.id)}
          >
            <div className="flex gap-5 ml-[3%] ">
              <div className="flex">
                <h1 className="text-lg w-60 ">
                  {item?.busName}
                  <span className="text-sm ml-1">{item?.seatType}</span>
                </h1>
              </div>
            </div>
            <div className="flex ml-[3%]">
              {" "}
              <div className="flex my-2 ">
                <h1 className="flex flex-col mr-2">
                  {item?.boardingPoint?.location}
                </h1>
              </div>
              <h1 className="my-2 ml-10">To</h1>
              <div className="flex ml-[10%] my-2">
                <h1 className="flex flex-col mr-2">
                  {item?.dropPoint?.location}
                </h1>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyTickets;
