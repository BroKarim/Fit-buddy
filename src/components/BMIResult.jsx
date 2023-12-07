import React, { useState, useEffect } from "react";
import checkBMI from "../utils/checkBMI";
import { useSearchParams } from "react-router-dom";
import { classificationBMI } from "../utils/classificationBMI";


const BMIResult = (props) => {
  const [searchParams,] = useSearchParams( );
  const height = searchParams.get('h');
  const weight = searchParams.get('w');
  const bmiValue = checkBMI(height,weight);
  const bmiClass = classificationBMI(bmiValue);

  const age = searchParams.get('age');
  const gender = searchParams.get('gender');

  const [motivation, setMotivation] = useState("undefined");
  useEffect(() => {
    switch (bmiClass) {
      case 'Underweight':
        setMotivation("Your BMI indicates that you are underweight. It's important to focus on a balanced diet to ensure you're getting the nutrients your body needs. Consider consulting with a healthcare professional for personalized advice on achieving a healthier weight.");
        break;
      case 'Normal':
        setMotivation("Congratulations! Your BMI falls within the normal weight range. Keep up the good work with a healthy lifestyle, including regular exercise and a balanced diet.");
        break;
      case 'Overweight':
        setMotivation("Your BMI suggests that you are overweight. Consider making positive lifestyle changes, such as adopting a healthier diet and incorporating regular physical activity into your routine. Small, sustainable changes can make a big difference.");
        break;
      case 'Obesity':
        setMotivation("Your BMI indicates obesity, which can have health implications. It's crucial to prioritize your well-being by making significant lifestyle changes. Consider consulting with a healthcare professional for personalized advice and support on your journey to a healthier weight.");
        break;
      default:
        setMotivation("undefined");
    }
  }, [bmiClass]);
  
  
  return(
    <section className="h-screen text-white bg-black flex justify-center items-center flex-col">
    <div className="text-center font-bold text-xl">
      <p>Your current BMI is : <span className="text-[#ff5050]">{bmiValue}</span></p>
      <h1 className="text-[#ff0000] text-4xl sm:text-5xl my-1">{bmiClass}</h1>
    </div>
    <div>
        <div className="mt-4 text-center">
          <h2 className="font-bold text-xl mb-4">{motivation}</h2>
        </div>
        <div className=" flex justify-center">
            <a
              href={`/goals?bmi=${bmiClass}&age=${age}&gender=${gender}`}
              className="text-gray-900 mt-4 bg-[#FD3D00] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-sm px-16 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:border-gray-700 dark:text-white me-2 mb-2 hover:opacity-70">
              Continue
            </a>
        </div>
    </div>
  </section>
  )
};

export default BMIResult;

