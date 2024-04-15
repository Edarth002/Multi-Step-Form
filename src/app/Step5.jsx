import React from "react";

export const Step5 = (props) => {
  return (
    <div className="flex flex-col mx-auto lg:p-20 p-10 lg:w-2/3 w-[95%] lg:z-0 z-10 relative lg:bg-transparent mt-32 lg:mt-0 rounded-xl bg-white">
      <p className="text-Marineblue font-bold text-3xl py-5">Finishing up</p>
      <p className="text-Coolgray">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-Magnolia p-10 mt-10 rounded-lg">
        <header>
          <div className="flex justify-between items-center py-5">
            <p className="flex flex-col">
              Arcade(Yearly)
              <span
                className="hover:text-Purplishblue underline text-Coolgray cursor-pointer"
                onClick={props.handleState}
              >
                Change
              </span>
            </p>
            <p>$9/mo</p>
          </div>
          <p></p>
        </header>
        <div className="bg-Lightgray h-[1px] w-full"></div>
        <section className="pt-3">
          <div className="py-2 flex items-center justify-between">
            <p className="text-Coolgray">Online service</p>
            <p>$10/mo</p>
          </div>
          <div className="pt-2 flex items-center justify-between ">
            <p className="text-Coolgray">Larger storage</p>
            <p>$10/mo</p>
          </div>
        </section>
      </div>
      <div className="p-10 flex items-center justify-between">
        <p className="text-Coolgray">Total (per year)</p>
        <p className="text-Purplishblue">$120/Yr</p>
      </div>
    </div>
  );
};
export default Step5;
