import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyTickets from "./MyTickets";

const Bheader = () => {
  const [orders, SetOrders] = useState(false);
  return (
    <>
      <div className="w-screen h-20 p-2 mt-4 flex justify-between sticky ">
        <div className="flex gap-28">
          <div className="flex  pl-32 ">
            <img
              alt="buslogo"
              src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
              className="w-32 h-14"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <div className=" bg-gray-300 p-3 rounded-md px-2 py-1 ">
                <img
                  alt="buslogo"
                  src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
                  className="w-16 h-8"
                />
                <h1 className="text-red-800">Bus Ticket</h1>
              </div>
              <span className="w-full mt-[1px]  border-b-4 border-red-900"></span>
            </div>

            <div className="bg-gray-300 p-3 rounded-md px-2 py-2">
              <img
                alt="buslogo"
                src="https://st.redbus.in/web/images/layout/rail_vertical.svg"
                className="w-16 h-8"
              />
              <h1 className="text-red-800">Rail Ticket</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mr-10 m-2 mt-5">
          <Link to="/">
            <button className=" font-bold mt-1.5">Home</button>
          </Link>
          <button onClick={() => SetOrders(!orders)} className="  font-bold">
            {" "}
            MyTickets
          </button>{" "}
          <button className="  font-bold">Contact</button>{" "}
          <button className="  font-bold">Help</button>{" "}
          <button className="  font-bold">LogIn</button>
        </div>
      </div>
      {orders && (
        <div className="w-[50em] h-[30em] bg-slate-100 fixed right-5 top-24 z-10 overflow-x-scroll">
          <MyTickets SetOrders={SetOrders} />
        </div>
      )}
    </>
  );
};

export default Bheader;
