import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendor from "./Calendor";
import SearchFiltter from "./searchFiltter";

const SearchBox = () => {
  const [date, setDate] = useState();
  const [shoowDate, setShowDate] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(null);
  const [searchItem, setSearchItem] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const navigate = useNavigate();
  let dateWithoutSpaces = date && date?.toDateString().replace(/\s/g, "-");
  const navigatehandler = () => {
    navigate(`/BusList/${from}/${to}/${dateWithoutSpaces}`);
  };
  const inputHandler = (setState, value) => {
    setShowSuggestion(null);
    setState(value);
  };
  useEffect(() => {
    SearchFiltter(setShowSuggestion, searchItem);
  }, [searchItem]);

  const showDateHandler = () => setShowDate(!shoowDate);

  return (
    <div className="w-[100%] md:w-[90%] h-40 pt-12 ml-[1.5%] md:relative md:top-32  md:left-[15%] flex flex-col ">
      <div className="">
        <h1 className="text-4xl text-white pl-[10%] invisible md:visible">
          India's No.1 Online Bus Ticket Booking Site
        </h1>
        <h1 className="text-lg font-semibold pl-[30%] md:invisible">
          Bus Ticket Booking
        </h1>
      </div>
      <div className="flex flex-col w-[95%] px-3 py-3 md:px-0 md:py-0 md:flex-row mt-8 border md:border-none shadow-xl md:shadow-none">
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => inputHandler(setSearchItem, e.target.value)}
          className="w-[90%] md:w-1/4 h-10 md:h-24 px-2 py-8 p-10   md:rounded-l-3xl border-b-2 md:border-r-2 border-gray-400"
        />

        <input
          type="text"
          placeholder="TO"
          value={to}
          onChange={(e) => inputHandler(setSearchItem, e.target.value)}
          className="w-[90%] md:w-1/4 h-10 md:h-24 px-2  py-8  md:p-10 border-b-2 md:border-r-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Date"
          value={date?.toDateString()}
          className="w-[90%] md:w-1/5 h-10 md:h-24 px-2 py-8 md:p-10 border-b-2 border-gray-400"
          onClick={showDateHandler}
        />

        <button
          className="w-[90%] md:w-56 h-10 md:h-24 bg-red-700 md:bg-green-700 md:rounded-r-3xl text-xl font-semibold"
          onClick={navigatehandler}
        >
          Search
        </button>
      </div>
      {!from && (
        <div className="w-72 relative left-3 -top-48 md:-top-5 shadow-2xl">
          {showSuggestion?.map((ele) => (
            <div
              className="bg-white px-3 py-3"
              key={ele}
              onClick={(ele) => inputHandler(setFrom, ele.target.textContent)}
            >
              {ele}
            </div>
          ))}
        </div>
      )}
      {from && (
        <div className=" w-72 relative left-3 md:left-[19rem] -top-32 md:-top-5 shadow-2xl">
          {showSuggestion?.map((ele) => (
            <div
              className="bg-white px-3 py-3"
              key={ele}
              onClick={(ele) => inputHandler(setTo, ele.target.textContent)}
            >
              {ele}
            </div>
          ))}
        </div>
      )}

      <div onClick={showDateHandler}>
        {shoowDate && <Calendor setDate={setDate} date={date} />}
      </div>
    </div>
  );
};

export default SearchBox;
