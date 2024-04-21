import React from "react";
import { useDispatch } from "react-redux";
import { handleFormToggle } from "../Utills/FormToggleSlicer";

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(handleFormToggle());
  };
  return (
    <>
      <div className="bg-black fixed top-0 left-0 w-screen h-screen bg-opacity-70 "></div>
      <div className="flex flex-col bg-red-300 fixed top-0 right-0 ml-[10%] mr-0 w-[50%] h-screen ">
        <form className="flex flex-col ml-10 gap-3">
          <h1 className="text-xl font-semibold">Passenger Information</h1>
          <div>
            <h1>Full Name</h1>
            <input
              type="text"
              placeholder="Name"
              className="w-[90%] px-2 py-1 border border-black rounded-md"
            />
          </div>
          <div className="flex ">
            <div>
              <h1>Gender</h1>
              <div className="flex  gap-3">
                <div>
                  <input type="checkbox" />
                  <span>Male</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Female</span>
                </div>
              </div>
            </div>
            <div className="ml-[33%]">
              <h1>Age</h1>
              <input
                type="age"
                placeholder="Age"
                className="px-2 py-1 border border-black rounded-md"
              />
            </div>
          </div>

          <div>
            <h1>State Of Residence</h1>
            <input
              type="text"
              placeholder="state"
              className="w-[90%] px-2 py-1 border border-black rounded-md"
            />
          </div>
        </form>
        <form className="flex flex-col gap-3 mt-5 pl-10">
          <h1 className="text-xl font-semibold">Contact Information</h1>
          <div>
            <h1>Email ID</h1>
            <input
              type="text"
              placeholder="Email id"
              className="w-[90%] px-2 py-1 border border-black rounded-md"
            />
          </div>
          <div>
            <h1>Phone Number</h1>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-[90%] px-2 py-1 border border-black rounded-md"
            />
          </div>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Form;
