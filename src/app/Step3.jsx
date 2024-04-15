import React from "react";
import Image from "next/image";
import tickIcon from "../../public/images/icon-checkmark.png";

function Step3() {
  return (
    <div className="className=flex flex-col mx-auto lg:p-20 p-10 lg:w-2/3 w-[95%] lg:z-0 z-10 relative lg:bg-transparent mt-32 lg:mt-0 rounded-xl bg-white">
      <h1 className="text-4xl  mt-5">Pick add-ons</h1>
      <p className="text-Coolgray mt-3">
        Add-ons help enhancing your gaming experience
      </p>
      <div className="flex items-center flex-col w-full">
        <section className="border-Purplishblue bg-Magnolia border rounded-lg p-5 w-full mt-5">
          <div className="items-center flex justify-between">
            <div className="flex items-center space-x-5 justify-center">
              <Image
                src={tickIcon}
                alt="tickIcon"
                className="bg-Purplishblue p-1 w-7 h-7 justify-center flex items-center rounded-md"
              />

              <div>
                <h1 className=" mt-5">Online Service</h1>
                <p className="text-Coolgray text-md">
                  Access to multiplier games
                </p>
              </div>
            </div>
            <p className="text-Purplishblue ">+$1/mo</p>
          </div>
        </section>
        <section className="border-Purplishblue bg-Magnolia border rounded-lg p-5 w-full mt-5">
          <div className="items-center flex justify-between">
            <div className="flex items-center space-x-5 justify-center">
              <Image
                src={tickIcon}
                alt="tickIcon"
                className="bg-Purplishblue p-1 w-7 h-7 justify-center flex items-center rounded-md"
              />

              <div>
                <h1 className=" mt-5">Larger storage</h1>
                <p className="text-Coolgray text-md">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-Purplishblue ">+$2/mo</p>
          </div>
        </section>
        <section className="border-Coolgray bg-white cursor-pointer hover:border-Purplishblue border rounded-lg p-5 w-full mt-5">
          <div className="items-center flex justify-between">
            <div className="flex items-center space-x-5 justify-center ">
              <Image
                src={tickIcon}
                alt="tickIcon"
                className="bg-white p-1 w-7 h-7 border-Coolgray border rounded-md"
              />

              <div>
                <h1 className=" mt-5">Customizable profile</h1>
                <p className="text-Coolgray text-md">
                  Custom theme on your profile
                </p>
              </div>
            </div>
            <p className="text-Purplishblue ">+$2/mo</p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Step3;
