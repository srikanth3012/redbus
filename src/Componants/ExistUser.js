import React from "react";

const ExistUser = ({ user, ExistUserHandler }) => {
  return (
    <div className=" flex justify-between border w-[90%] mx-3 px-2 py-2 mt-[3%]">
      <div className="flex flex-col gap-2 w-[88%]">
        <div className="flex justify-evenly">
          {" "}
          <h1>Name:{user?.username}</h1>
          <h1>Age:{user?.age}</h1>
          <h1>Gender:{user?.gender}</h1>
        </div>
        <div className="flex justify-evenly">
          <h1>Gmail:{user?.email}</h1>
          <h1>Phone:{user?.phone}</h1>
        </div>
      </div>
      <div
        className="py-3 px-3 text-md font-semibold bg-green-400 rounded-lg"
        onClick={(e) => ExistUserHandler(user)}
      >
        Add
      </div>
    </div>
  );
};

export default ExistUser;
