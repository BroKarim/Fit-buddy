import vidBg from '../assets/video/vid1.mp4';
// import { dewasa, muda, tua } from '../assets/images/index';

export default function Hero() {
  return (
    <>
      <section className="home flex relative " id="home">
        {/* left */}
        <div className=" md:w-1/2 w-full float-left mx-auto md:mx-0  px-4 py-32 md:px-20 flex lg:h-screen lg:items-center ">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Move
              <strong className="block font-extrabold text-rose-700">& get stronger</strong>
            </h1>

            <p className="mt-4 text-white max-w-lg text-xl">Achieve your ideal body dreams with an exercise program designed especially for you.</p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a href="#card" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:-translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Go!</span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="md:w-1/2 md:flex hidden overflow-hidden">
          <div className="relative top-1/3 left-28 flex flex-col gap-6">
            {/* card 1 */}
            <div className="flex w-72 items-start space-x-2 rounded-lg border-gray-200 bg-white px-2 py-3 text-gray-900 shadow-2xl">
              {/* <!-- bagian icon --> */}
              <div className="flex-initial">
                <div className="bg-gradient-tl inline-flex items-center justify-center rounded-lg bg-green-300 from-green-400 via-green-400">
                  <div className="p-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                          d="M11.0005 15.9995L15.0005 11.9995M15.0005 11.9995L11.0005 7.99951M15.0005 11.9995H3.00049M11.0005 2.99951H17.7997C18.9198 2.99951 19.4799 2.99951 19.9077 3.2175C20.284 3.40925 20.59 3.71521 20.7817 4.09153C20.9997 4.51935 20.9997 5.07941 20.9997 6.19951V17.7995C20.9997 18.9196 20.9997 19.4797 20.7817 19.9075C20.59 20.2838 20.284 20.5898 19.9077 20.7815C19.4799 20.9995 18.9198 20.9995 17.7997 20.9995H11.0005"
                          stroke="#ffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- bagian text --> */}
              <div className="inline-flex flex-1 items-start justify-between">
                <div>
                  <h2 className="text-xs font-semibold tracking-tight text-black">Input Your Information</h2>
                  <p className="text-xs font-light text-gray-500">Provide the necessary details to get started</p>
                </div>
              </div>
            </div>

            {/* <!-- card 2 --> */}
            <div className="flex w-72 items-start space-x-2 rounded-lg border-gray-200 bg-white px-2 py-3 text-gray-900 shadow-2xl">
              {/* <!-- bagian icon --> */}
              <div className="flex-initial">
                <div className="bg-gradient-tl inline-flex items-center justify-center rounded-lg bg-green-300 from-green-400 via-green-400">
                  <div className="p-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                          d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z"
                          stroke="#ffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- bagian text --> */}
              <div className="inline-flex flex-1 items-start justify-between">
                <div>
                  <h2 className="text-xs font-semibold tracking-tight text-black">Choose Program</h2>
                  <p className="text-xs font-light text-gray-500">choose the program that suits your needs</p>
                </div>
              </div>
            </div>

            {/* <!-- card 3 --> */}
            <div className="flex w-72 items-start space-x-2 rounded-lg border-gray-200 bg-white px-2 py-3 text-gray-900 shadow-2xl">
              {/* <!-- bagian icon --> */}
              <div className="flex-initial">
                <div className="bg-gradient-tl inline-flex items-center justify-center rounded-lg bg-green-300 from-green-400 via-green-400">
                  <div className="p-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                          d="M19 9h-6.75c.04 0 1.53-6.93 1.61-7.3A3.34 3.34 0 0 0 14 1a1 1 0 0 0-1-1c-.352.004-.677.19-.86.49-.16.26-1.83 2.93-2.29 3.68-.57.92-1.14 1.84-1.71 2.77-.57.93-1.14 1.85-1.71 2.78-.46.75-2.28 3.75-2.28 3.75A1 1 0 0 0 5 15h6.75c-.04 0-1.73 7.78-1.73 7.81A1 1 0 0 0 11 24a1.04 1.04 0 0 0 .82-.42s2.87-4.73 3.19-5.25c.33-.54.66-1.08 1-1.62.32-.54.65-1.07.98-1.61.3-.49.61-.99.91-1.49.27-.44.53-.87.8-1.31.2-.32 1.15-1.78 1.16-1.8A.966.966 0 0 0 20 10a1 1 0 0 0-1-1zm-6 8.34l.83-2.66A3.98 3.98 0 0 0 14 14a1 1 0 0 0-1-1H6.77l3.96-6.45-.131.6-.172.777-.179.8c-.048.224-.229.973-.248 1.128A1.012 1.012 0 0 0 11 11h6.19L13 17.34z"
                          fill="#ffff"
                          fill-rule="evenodd"
                        ></path>{' '}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- bagian text --> */}
              <div className="inline-flex flex-1 items-start justify-between">
                <div>
                  <h2 className="text-xs font-semibold tracking-tight text-black">Upgrade Yourself</h2>
                  <p className="text-xs font-light text-gray-500">Transform your physique to achieve your ideal body</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="video-container">
          {/* 3 */}
          <video src={vidBg} className="absolute top-0 left-0 -z-10 h-full w-full object-cover" id="video-slider" loop autoPlay muted></video>
        </div>
      </section>
    </>
  );
}
