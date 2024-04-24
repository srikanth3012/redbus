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
  const navigatehandler = () => {
    navigate(`/BusList/${from}/${to}`);
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
    <div className="w-[80%] h-40 pt-12 relative top-32 left-[15%] flex flex-col">
      <div>
        <h1 className="text-4xl text-white pl-[10%]">
          India's No.1 Online Bus Ticket Booking Site
        </h1>
      </div>
      <div className="flex mt-8">
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => inputHandler(setSearchItem, e.target.value)}
          className="w-1/4 h-24 p-10   rounded-l-3xl  border-r-2 border-gray-400"
        />

        <input
          type="text"
          placeholder="TO"
          value={to}
          onChange={(e) => inputHandler(setSearchItem, e.target.value)}
          className="w-1/4 h-24 p-10 border-r-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Date"
          value={date?.toDateString()}
          className="w-1/5 h-24 p-10"
          onClick={showDateHandler}
        />

        <button
          className="w-56 h-24 bg-green-700 rounded-r-3xl text-xl font-semibold"
          onClick={navigatehandler}
        >
          Search
        </button>
      </div>
      {!from && (
        <div className="w-72 relative left-2 -top-5 shadow-2xl">
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
        <div className=" w-72 relative left-[19rem] -top-5 shadow-2xl">
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
