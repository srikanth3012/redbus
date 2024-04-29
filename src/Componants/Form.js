import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFormToggle } from "../Utills/FormToggleSlicer";
import { useNavigate, useParams } from "react-router-dom";
import { addDetails, confirmedSeats } from "../Utills/BusCheckOutSlicer";
import PassengerInfo from "./PassengerInfo";
import { addUser } from "../Utills/ExistingUserslicer";
import ExistUser from "./ExistUser";

const Form = ({
  boardingPoint,
  dropPoint,
  busDetails,
  busSeats,
  setPaymentToggle,
  setBoardingPoint,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { date } = useParams();
  const Existusers = useSelector((store) => store?.ExistUser?.ExistUser);

  const [formValues, setFormValues] = useState({
    name: "",
    gender: "",
    age: "",
    state: "",
    mail: "",
    phoneNumber: "",
  });
  const orders = useSelector((store) => store?.BusCheckOut?.CheckOut);

  const inputHandler = (e) => {
    const values = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(values);
  };

  const inputGenderHandler = (e) => {
    const values = { ...formValues, [e.target.name]: e.target.id };
    setFormValues(values);
  };

  const handleSubmit = (e) => {
    dispatch(
      addDetails({
        id: orders.length + 1,
        username: formValues?.name,
        gender: formValues?.gender,
        age: formValues?.age,
        email: formValues?.mail,
        phone: formValues?.phoneNumber,
        journeyDate: date,
        busName: busDetails[0]?.travelName,
        seatType: busDetails[0]?.seatType,
        seats: busSeats,
        boardingPoint: boardingPoint,
        dropPoint: dropPoint,
      })
    );
    dispatch(
      confirmedSeats({
        seats: busSeats,
        gender: formValues?.gender,
      })
    );
    dispatch(
      addUser({
        id: 1,
        username: formValues?.name,
        gender: formValues?.gender,
        age: formValues?.age,
        email: formValues?.mail,
        phone: formValues?.phoneNumber,
      })
    );
    dispatch(handleFormToggle());
    navigate("/BusList/checkout");
  };
  const handleCancel = () => {
    dispatch(handleFormToggle());
    setBoardingPoint("");
    setPaymentToggle(false);
  };
  const ExistUserHandler = (user) => {
    setFormValues({
      ...formValues,
      name: user.username,
      gender: user.gender,
      age: user.age,
      mail: user.email,
      phoneNumber: user.phone,
    });
    // console.log(user);
  };
  return (
    <>
      <div className="bg-black fixed z-20 top-0 left-0 w-screen h-screen bg-opacity-70 "></div>
      <div className="flex flex-col bg-white fixed z-20 top-0 right-0 ml-[10%] mr-0 w-[50%] h-screen text-xs text-gray-400 overflow-y-scroll">
        <h1 className="text-xl text-black font-semibold py-2 bg-gray-300 flex justify-center">
          Passenger Details
        </h1>
        {Existusers.length >= 1 && (
          <div className="text-black">
            <h1 className="flex font-semibold text-lg px-4 py-1 border-b-2">
              Existing user
            </h1>
            {Existusers.map((item) => (
              <ExistUser
                user={item}
                ExistUserHandler={() => ExistUserHandler(item)}
                key={item?.name}
              />
            ))}
          </div>
        )}
        <div>
          {busSeats.map((item, i) => (
            <PassengerInfo
              inputHandler={inputHandler}
              inputGenderHandler={inputGenderHandler}
              formValues={formValues}
              count={i}
              key={i}
            />
          ))}
        </div>

        <form className="flex flex-col gap-3 mt-5 pl-10">
          <h1 className="text-xl text-black font-semibold border-b-2">
            Contact Details
          </h1>
          <div className="shadow-xl px-4 py-7 rounded-md border">
            <div>
              <h1 className="py-3">Email ID</h1>
              <input
                type="text"
                name="mail"
                placeholder="Email id"
                value={formValues?.mail}
                className="w-[90%] px-2 py-1 border border-black rounded-md"
                onChange={inputHandler}
              />
            </div>
            <div>
              <h1 className="py-3">Phone Number</h1>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formValues?.phoneNumber}
                className="w-[90%] px-2 py-1 border border-black rounded-md"
                onChange={inputHandler}
              />
            </div>
          </div>
        </form>

        <div className="flex gap-2 justify-end px-5 py-7">
          <button
            className="px-2 py-2 bg-green-300 w-20 text-md text-black "
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-2 py-2 bg-green-300 w-20 text-md text-black "
            onClick={(e) => handleSubmit(e)}
          >
            Submit{date}
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
