// https://www.material-tailwind.com/docs/react/select#select
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const GenderOption = () => {
    const [searchParams] = useSearchParams();
    const age = searchParams.get('age');
  return (
<div className="bg-black w-full h-screen flex flex-col items-center justify-center">
    <Link to={"/"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6 left-7 top-4 absolute">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
    </Link>

    <h1 className="text-white font-bold text-4xl sm:text-5xl mb-10 mr-3">What's Your <span className="text-[#ff5050]">Gender?</span></h1>
    <div className="text-white">
        <div className="flex flex-col items-center">
            <Link to={`/height?gender=Female&age=${age}`}>
                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-3">
                    Female
                </button>
            </Link>
            <Link to={`/height?gender=Male&age=${age}`}>
                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-sm px-14 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                    Male
                </button>
            </Link>
        </div>
    </div>
</div>


  )
};

export default GenderOption;
