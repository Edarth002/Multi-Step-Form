import React from "react";

export const Step1 = () => {
  return (
    <div className="flex flex-col mx-auto lg:p-20 p-10 lg:w-2/3 w-[95%] lg:z-0 z-10 relative lg:bg-transparent mt-32 lg:mt-0 rounded-xl bg-white">
      <h1 className="text-4xl lg:mt-5">Personal info</h1>
      <p className="text-Coolgray mt-5 lg:text-base text-xl">
        Please provide your name, email address and phone number
      </p>
      <label>
        <p className="mt-10 mb-1">Name:</p>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full p-3 rounded-md outline-none border border-Coolgray"
          required
        />
      </label>
      <label>
        <p className="mt-10 mb-1">Email Address:</p>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full p-3 rounded-md outline-none border border-Coolgray"
          required
        />
      </label>
      <label>
        <div className="flex items-center justify-between mt-10 mb-1">
          <p className="">Phone Number:</p>
        </div>
        <input
          type="number"
          name="Phone Nmber"
          className="w-full p-3 rounded-md outline-none border border-Coolgray"
          required
        />
      </label>
    </div>
  );
};
export default Step1;
