import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

  const Height = () => {
    const [height, setHeight] = useState(0);
    const [searchParams] = useSearchParams();
    const age = searchParams.get('age');
    const gender = searchParams.get('gender');
    return (
      <div className="bg-black w-full h-screen flex flex-col items-center justify-center relative">
        <Link to={"/gender"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6 left-7 top-4 absolute">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </Link>

        <h1 className="text-white font-bold text-4xl sm:text-5xl  mb-6">What's Your Current <span className="text-[#ff5050]">Height?</span></h1>
        <div className="text-white">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 flex">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <span className="pl-3 flex items-center text-white font-semibold">CM</span>
                </div>
                <Link to={`/weight?h=${height}&age=${age}&gender=${gender}`}>
                  <button type="button" class="text-gray-900 bg-[#FD3D00] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-sm px-16 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:border-gray-700 dark:text-white me-2 mb-2 hover:opacity-70 mt-2 ms-3">
                      Continue
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Height;
