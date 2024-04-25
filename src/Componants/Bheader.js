import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyTickets from "./MyTickets";

const Bheader = () => {
  const [orders, SetOrders] = useState(false);
  const [toggle, setToggle] = useState("invisible");
  const [shadow, setShadow] = useState("");

  const toggHandler = () => {
    if (toggle === "invisible") {
      setToggle("visible");
      setShadow("shadow-xl");
    } else {
      setToggle("invisible");
      setShadow("");
    }
  };
  return (
    <>
      <div className="w-screen h-20 p-0 md:p-2 mt-4 md:flex md:justify-between sticky ">
        <div className="flex flex-col md:flex-row gap-5 md:gap-28">
          <div
            className={`flex relative z-20 md:static py-2  md:py-0 gap-3  md:pl-32 ${shadow}`}
          >
            <div className="md:invisible">
              <h1 className="text-3xl" onClick={toggHandler}>
                =
              </h1>
            </div>
            <img
              alt="buslogo"
              src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
              className="w-20 md:w-32 h-10  md:h-14"
            />
          </div>
          <div className="flex pl-28 md:ml-0  gap-40 md:gap-4 border md:border-none shadow-md md:shadow-none w-screen md:w-auto h-28  md:h-auto py-5 md:py-0">
            <div className="flex flex-col ">
              <div className=" md:bg-gray-300 p-3 rounded-md px-2 py-1 ">
                <img
                  alt="buslogo"
                  src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
                  className="w-20 md:w-16 h-10 md:h-8"
                />
                <h1 className="text-xs text-red-800">Book Bus Ticket</h1>
              </div>
              <span className="w-full mt-[1px]  border-b-4 border-red-900"></span>
            </div>

            <div className="  md:bg-gray-300 p-3 rounded-md px-2 py-2">
              <img
                alt="buslogo"
                src="https://st.redbus.in/web/images/layout/rail_vertical.svg"
                className="w-20 md:w-16 h-10 md:h-8"
              />
              <h1 className="text-xs text-red-800">Book Rail Ticket</h1>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col top-[56px] absolute z-10 md:static  md:flex-row gap-2 mr-10 md:mt-5 ${toggle} md:visible h-screen md:h-auto bg-white w-[30%]`}
        >
          <Link to="/">
            <button className=" font-bold mt-2.5 ml-16 md:ml-0">Home</button>
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
        <div className="w-[50em] h-[30em] bg-slate-100 fixed right-5 top-24 z-20 overflow-x-scroll">
          <MyTickets SetOrders={SetOrders} />
        </div>
      )}
    </>
  );
};

export default Bheader;
