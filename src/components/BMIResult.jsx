import React from "react";

const BMIResult = () => {
  return(
    <section className="h-screen text-white bg-black flex justify-center items-center flex-col">
    <div className="text-center font-bold text-xl">
      <p>Your current BMI is : <span className="text-[#ff5050]">9.3</span></p>
      <h1 className="text-[#ff0000] text-4xl">Underweight</h1>
    </div>
    <div>
        <div className="mt-4 text-center">
          <h2 className="font-bold text-xl mb-4">Time to apply healthier lifestyle and look after your calorie intake</h2>
          <p>In 60% of cases, poor diet increases the risk of Diabetes</p>
        </div>
        <div className=" flex justify-center">
            <button
              type="button"
              className="text-gray-900 mt-4 bg-[#FD3D00] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-sm px-16 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:border-gray-700 dark:text-white me-2 mb-2 hover:opacity-70">
              Continue
            </button>
        </div>
    </div>
  </section>
  
  )
};

export default BMIResult;

