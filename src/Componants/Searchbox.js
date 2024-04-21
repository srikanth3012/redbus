import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const from = useRef();
  const to = useRef();
  const navigate = useNavigate();
  const navigatehandler = () => {
    navigate(`/BusList/${from?.current?.value}/${to?.current?.value}`);
  };
  return (
    <div className="w-[80%] h-40 pt-12 relative top-32 left-[15%] flex flex-col gap-8 ">
      <div>
        <h1 className="text-4xl text-white pl-[10%]">
          India's No.1 Online Bus Ticket Booking Site
        </h1>
      </div>
      <div>
        <input
          ref={from}
          type="text"
          placeholder="From"
          // value={from?.current?.value}
          onChange={(e) => e.target.value}
          className="w-1/3 p-10   rounded-l-3xl border border-r-gray-400"
        />

        <input
          ref={to}
          type="text"
          placeholder="TO"
          // value={to?.current?.value}
          className="w-1/3  p-10"
        />
        <button
          className="w-56 h-[105px] bg-green-700 rounded-r-3xl text-xl font-semibold"
          onClick={navigatehandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
