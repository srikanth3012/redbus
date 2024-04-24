import React from "react";
import Calendar from "react-calendar";

const Calendor = ({ setDate, date }) => {
  return (
    <div className="text-xs px-3 py-3 w-60 relative -top-8 left-[50%] bg-white">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default Calendor;
