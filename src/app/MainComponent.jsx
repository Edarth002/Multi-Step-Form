import React, { useState } from "react";
import Image from "next/image";
import bgDesktop from "../../public/images/bg-sidebar-desktop.png";
import bgMobile from "../../public/images/bg-sidebar-mobile.png";
import thankYou from "../../public/images/icon-thank-you.png";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

export const MainComponent = () => {
  //This component handles the switching between various steps and the confirm operation
  // it is the control system of the application

  //This code sets a use State for the various steps
  const [Steps, setSteps] = useState(1);
  //Function for next step(moves the user one step forward)
  function handleStates() {
    setSteps((prev) => {
      if (prev === 5) {
        return 6;
      } else {
        return Math.min(prev + 1, 5);
      }
    });
  }
  //Function for prev step(takes the user one step backward )
  function handleStatesBack() {
    setSteps((prev) => {
      return Math.min(prev - 1, 5);
    });
  }
  function handleStatesBack2() {
    setSteps((prev) => {
      return Math.min(prev - 3, 5);
    });
  }
  function handleStatesBack1() {
    setSteps((prev) => {
      return Math.min(prev - 2, 5);
    });
  }
  //Function to handle the color of the numbers in the NavBar
  const [Highlight, setHighlight] = useState(false);
  // function handleHighlight() {
  //   setHighlight((prev) => {
  //     return (prev = true);
  //   });
  // }
  //Handles the color and background of the numbers in the NavBar
  const bgcolor = {
    color: {
      default: "hsla(231, 11%, 63%, 0)",
      current: "hsl(206, 94%, 87%)",
    },
    text: {
      default: "hsl(231, 100%, 99%)",
      current: "black",
    },
  };

  return (
    <div className="lg:bg-white lg:relative max-w-[70rem] flex lg:flex-row flex-col justify-between lg:p-5 lg:w-4/5 w-full mx-auto lg:mt-10 lg:rounded-xl">
      <div className="relative">
        <Image
          src={bgDesktop}
          alt="Desktop Background"
          className="lg:block hidden"
        />
        <Image
          src={bgMobile}
          alt="Mobile Background"
          className="lg:hidden block w-screen h-60 fixed"
        />
        <nav className="absolute flex lg:space-x-0 space-x-7 mx-auto lg:top-14 top-5 lg:pl-14 w-full lg:items-start items-center justify-center lg:flex-col flex-row ">
          <div className="lg:flex items-center lg:space-x-5 py-5">
            {/*
              Checks if the Step meets the required condition, then alters the colors accordingly
              Repeats this step for other similar functions
              */}
            <p
              style={{
                backgroundColor:
                  Steps === 1 ? bgcolor.color.current : bgcolor.color.default,
                color:
                  Steps === 1 ? bgcolor.text.current : bgcolor.text.default,
              }}
              className="bg-transparent lg:py-2 lg:px-[0.8rem] px-5 py-3 text-xl flex mx-auto lg:text-base text-white font-semibold rounded-full outline-none border border-white lg:h-10 h-14 w-14 lg:w-10"
            >
              1
            </p>
            <div className="lg:flex flex-col hidden">
              <p className="text-Lightgray">Step 1</p>
              <p className="text-lg font-semibold text-white">YOUR INFO</p>
            </div>
          </div>
          <div className="lg:flex items-center lg:space-x-5 py-5">
            <p
              style={{
                backgroundColor:
                  Steps === 2 ? bgcolor.color.current : bgcolor.color.default,
                color:
                  Steps === 2 ? bgcolor.text.current : bgcolor.text.default,
              }}
              className="bg-transparent lg:py-2 lg:px-[0.8rem] px-5 py-3 text-xl flex mx-auto lg:text-base text-white font-semibold rounded-full outline-none border border-white lg:h-10 h-14 w-14 lg:w-10"
            >
              2
            </p>
            <div className="lg:flex flex-col hidden">
              <p className="text-Lightgray">Step 2</p>
              <p className="text-lg font-semibold text-white">SELECT PLAN</p>
            </div>
          </div>
          <div className="lg:flex items-center lg:space-x-5 py-5">
            <p
              style={{
                backgroundColor:
                  Steps === 3 ? bgcolor.color.current : bgcolor.color.default,
                color:
                  Steps === 3 ? bgcolor.text.current : bgcolor.text.default,
              }}
              className="bg-transparent lg:py-2 lg:px-[0.8rem] px-5 py-3 text-xl flex mx-auto lg:text-base text-white font-semibold rounded-full outline-none border border-white lg:h-10 h-14 w-14 lg:w-10"
            >
              3
            </p>
            <div className="lg:flex flex-col hidden">
              <p className="text-Lightgray">Step 3</p>
              <p className="text-lg font-semibold text-white">ADD-ONS</p>
            </div>
          </div>
          <div className="lg:flex items-center lg:space-x-5 py-5">
            <p
              style={{
                backgroundColor:
                  Steps === 4 || Steps === 5 || Steps === 6
                    ? bgcolor.color.current
                    : bgcolor.color.default,
                color:
                  Steps === 4 || Steps === 5 || Steps === 6
                    ? bgcolor.text.current
                    : bgcolor.text.default,
              }}
              className="bg-transparent lg:py-2 lg:px-[0.8rem] px-5 py-3 text-xl flex mx-auto lg:text-base text-white font-semibold rounded-full outline-none border border-white lg:h-10 h-14 w-14 lg:w-10"
            >
              4
            </p>
            <div className="lg:flex flex-col hidden">
              <p className="text-Lightgray">Step 4</p>
              <p className="text-lg font-semibold text-white">SUMMARY</p>
            </div>
          </div>
        </nav>
      </div>

      {
        //Checks if the current step is six, then prompts a success message else, it checks for the
        //current step and displays the appropriate form
        Steps === 6 ? (
          <div className=" flex flex-col mx-auto lg:p-20 p-10 lg:text-base text-2xl text-center lg:w-2/3 w-[95%] lg:z-0 z-10 relative lg:bg-transparent mt-32 lg:mt-0 rounded-xl bg-white items-center">
            <Image
              src={thankYou}
              alt="Thank you Message"
              className="lg:mt-20 mt-10"
            />
            <p className="text-3xl font-bold text-Marineblue my-5">
              Thank you!
            </p>
            <p className="text-Coolgray">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        ) : (
          <>
            {Steps === 1 && <Step1 />}
            {Steps === 2 && <Step2 />}
            {Steps === 3 && <Step3 />}
            {Steps === 4 && <Step4 handleState={handleStatesBack1} />}
            {Steps === 5 && <Step5 handleState={handleStatesBack2} />}
          </>
        )
      }
      <div className="bg-white lg:bg-transparent lg:w-[55%] w-full flex justify-between p-3 lg:bottom-10 lg:right-20 bottom-0 items-center absolute ">
        <div className="">
          <button
            type="submit"
            className="lg:mt-24 text-Coolgray rounded-lg w-32 hover:text-Marineblue font-semibold cursor-pointer"
            disabled={Steps === 6}
            hidden={Steps === 1 || Steps === 6}
            onClick={handleStatesBack}
          >
            {"Go back"}
          </button>
        </div>
        {/* This button calls the handleStatesBack function which makes the user 'go forward' one step
      If there are no more steps, the function is disabled and the button hidden to display the confirm button*/}
        <div className="">
          <button
            type="submit"
            className="bg-Marineblue hover:bg-Pastelblue lg:mt-24 p-3 text-white rounded-lg w-32 cursor-pointer"
            disabled={Steps === 6}
            hidden={Steps === 6}
            onClick={handleStates}
          >
            {Steps === 5 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainComponent;
