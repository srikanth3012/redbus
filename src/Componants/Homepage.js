import React from "react";
import SearchBox from "./Searchbox";
import TrendingOffer from "./TrendingOffer";

const Homepage = () => {
  return (
    <div className="w-screen h-[30em] bg-red-900">
      <img
        alt="bus"
        src="https://st.redbus.in/Images/HomeIndia/HeroImageV2_C.png"
        className="absolute"
      />
      <SearchBox />
      <div className="relative top-[63%] left-[10%] bg-white  w-3/4 h-60  rounded-2xl shadow-black drop-shadow-2xl">
        <h1 className="text-3xl text-black pl-[2%] pt-[1%]">TRENDING OFFER</h1>
        <TrendingOffer />
      </div>
    </div>
  );
};

export default Homepage;
