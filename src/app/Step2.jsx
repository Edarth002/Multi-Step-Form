import React, { useState } from "react";
import Image from "next/image";
import arcadeIcon from "../../public/images/icon-arcade.png";
import advancedIcon from "../../public/images/icon-advanced.png";
import proIcon from "../../public/images/icon-pro.png";
export const Step2 = () => {
  //This handles the toggle state, true = monthly & false = yearly
  const [Toggle, setToggle] = useState(true);
  //Function to switch between true and false
  function setTogg(params) {
    setToggle((prev) => {
      return !prev;
    });
  }
  //This is an object for the toggle margin and color state of "monthly" & "yearly"
  const togglePosition = {
    marginLeft: {
      monthly: "0.2rem",
      yearly: "1.75rem",
    },
    color: {
      default: "hsl(231, 11%, 63%)",
      current: "hsl(213, 96%, 18%)",
    },
  };
  return (
    <div className=" flex flex-col mx-auto lg:p-20 p-10 lg:w-2/3 w-[95%] lg:z-0 z-10 relative lg:bg-transparent mt-32 lg:mt-0 rounded-xl bg-white">
      {/* Here, the form begins */}
      <h1 className="text-4xl  lg:mt-5">Select your plan</h1>
      <p className="text-Coolgray mt-5 lg:text-base text-lg">
        You have the option of monthly or yearly billing
      </p>
      <div className="lg:py-10 flex lg:flex-row flex-col items-center justify-center mx-auto w-full lg:space-x-5">
        <section className="lg:w-40 w-full lg:h-auto lg:flex-col flex-row lg:space-x-0 space-x-3 items-start flex my-3 border-[1.5px] border-Purplishblue cursor-pointer p-5 rounded-lg">
          <Image src={arcadeIcon} alt="Arcade Icon" />
          <div className="">
            <p className=" text-lg lg:mt-12 mt-0">Arcade</p>
            {/* The following code handles relies
             on the toggle button to switch between data for yearly and monthly subscription */}
            {Toggle === true ? (
              <p className="text-Coolgray">$9/mo</p>
            ) : (
              <div>
                <p className="text-Coolgray">$90/yr</p>
                <p className="text-Marineblue">2 months free</p>
              </div>
            )}
          </div>
        </section>
        <section className="lg:w-40 w-full lg:h-auto lg:flex-col flex-row lg:space-x-0 space-x-3 items-start flex my-3 border border-Coolgray hover:border-Purplishblue cursor-pointer p-5 rounded-lg">
          <Image src={advancedIcon} alt="Arcade Icon" />
          <div className="">
            <p className=" text-lg font lg:mt-12 mt-0">Advanced</p>
            {Toggle === true ? (
              <p className="text-Coolgray">$12/mo</p>
            ) : (
              <div>
                <p className="text-Coolgray">$120/yr</p>
                <p className="text-Marineblue">2 months free</p>
              </div>
            )}
          </div>
        </section>
        <section className="lg:w-40 w-full lg:h-auto lg:flex-col flex-row lg:space-x-0 space-x-3 items-start flex my-3 border border-Coolgray p-5 hover:border-Purplishblue cursor-pointer rounded-lg">
          <Image src={proIcon} alt="Arcade Icon" />
          <div className="">
            <p className=" text-lg lg:mt-12 mt-0">Pro</p>
            {Toggle === true ? (
              <p className="text-Coolgray">$15/mo</p>
            ) : (
              <div>
                <p className="text-Coolgray">150/yr</p>
                <p className="text-Marineblue">2 months free</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="bg-Magnolia w-full rounded-lg h-14 relative flex justify-between lg:px-40 px-20 text-lg lg:text-base text-Coolgray  items-center">
        {/* The following code handles relies
             on the toggle button to switch yearly and monthly highlight 
             Monthly === true*/}
        <p
          style={{
            color:
              Toggle === true
                ? togglePosition.color.current
                : togglePosition.color.default,
            transition: "0.2s ease-in",
          }}
        >
          Monthly
        </p>
        <div className="bg-Marineblue w-12 h-6 rounded-full absolute transform_50 left-1/2 top-1/2 flex items-center">
          {/* The following code handles relies
             on the togglefunction(setTogg) to create toggle effect and also
              assists the states throughout the code */}
          <div
            style={{
              marginLeft:
                Toggle === true
                  ? togglePosition.marginLeft.monthly
                  : togglePosition.marginLeft.yearly,
              transition: "0.2s ease-in",
            }}
            onClick={setTogg}
            className="bg-white rounded-full w-4 h-4 my-[2px] cursor-pointer"
          ></div>
        </div>
        {/* Yearly === false  */}
        <p
          style={{
            color:
              Toggle === true
                ? togglePosition.color.default
                : togglePosition.color.current,
            transition: "0.2s ease-in",
          }}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};
export default Step2;
