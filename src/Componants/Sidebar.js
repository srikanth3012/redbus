import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className=" hidden  md:flex flex-col gap-3 text-sm  w-52 pl-3 text-gray-700 pt-3 sticky top-14">
        <div className=" w-40 flex flex-col gap-1">
          <h1 className="font-semibold ml-0">FILTERS</h1>
          <hr />
          <h1>Live Tracking</h1>
          <hr />
          <h1>Primo Bus</h1>
        </div>
        <div className="w-40 flex flex-col gap-1">
          <h1 className="font-semibold">DEPARTURE TIME</h1>
          <hr />
          <h1>Before 6PM</h1>
          <hr />
          <h1>6AM TO 12 PM</h1>
          <hr />
          <h1>12PM T0 6PM</h1>
          <hr />
          <h1>After 6Pm</h1>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">BUS TYPE</h1>
          <hr />
          <h1>SEATER</h1>
          <hr />
          <h1>SLEEPER</h1>
          <hr />
          <h1>AC</h1>
          <hr />
          <h1>NON AC</h1>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">SEAT AVAILABILITY</h1>
          <hr />
          <h1>SINGLE SEATS</h1>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">ARRIVAL TIME</h1>
          <hr />
          <h1>Before 6PM</h1>
          <hr />
          <h1>6AM To 12PM</h1>
          <hr />
          <h1>12PM TO 6PM</h1>
          <hr />
          <h1>After 6PM</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
