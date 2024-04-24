import React from "react";

const PassengerInfo = ({
  inputHandler,
  inputGenderHandler,
  formValues,
  count,
}) => {
  return (
    <form className="flex flex-col ml-10 gap-3">
      <h1 className="text-lg text-black py-2 font-semibold border-b-2">
        {count + 1} Passenger Information
      </h1>
      <div className="shadow-lg rounded-md px-4 py-7 w-[98%] flex flex-col gap-5 mt-2 border">
        <div>
          <h1 className="py-2">Full Name</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formValues?.name}
            onChange={inputHandler}
            className="w-[90%] px-2 py-1 border border-black rounded-md"
          />
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-2">
            <h1 className="py-2">Gender</h1>
            <div className="flex  gap-3">
              <div>
                <input
                  id="Male"
                  type="radio"
                  name="gender"
                  onChange={inputGenderHandler}
                />
                <span className="ml-2">Male</span>
              </div>
              <div>
                <input
                  id="Female"
                  type="radio"
                  name="gender"
                  onChange={inputGenderHandler}
                />
                <span className="ml-2">Female</span>
              </div>
            </div>
          </div>
          <div className="ml-[33%]">
            <h1 className="py-2">Age</h1>
            <input
              name="age"
              type="age"
              placeholder="Age"
              className="px-2 py-1 border border-black rounded-md"
              onChange={inputHandler}
            />
          </div>
        </div>

        <div>
          <h1 className="py-2">State Of Residence</h1>
          <input
            name="state"
            type="text"
            placeholder="state"
            className="w-[90%] px-2 py-1 border border-black rounded-md"
            onChange={inputHandler}
          />
        </div>
      </div>
    </form>
  );
};

export default PassengerInfo;
