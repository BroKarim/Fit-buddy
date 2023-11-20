export default function WorkRecom() {
  return (
    <section className="bg-black">
      <div className=" py-10">
        <div className="container flex flex-col items-center px-4 py-8  mx-auto text-center  md:py-16 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-md text-white">
            Some workout{' '}
            <span className="text-red-500">
              recomended for you <br />{' '}
            </span>
          </h1>
        </div>
        <div className="flex md:flex-row flex-wrap start flex-col overflow-hidden  justify-items-start p-4 items-center">
          <a href="#" className="block py-4">
            <iframe title="Giphy" src="https://giphy.com/embed/mGWBjz74fn404BWUl4" width="400" height="200" className="giphy-embed" allowFullScreen></iframe>

            <div className="mt-4 sm:flex sm:items-center sm:justify-center text-white sm:gap-4">
              <strong className="font-medium">Push Up</strong>

              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

              <p className="mt-0.5 opacity-50 sm:mt-0">2 set of 12 reps</p>
            </div>
          </a>
          <a href="#" className="block py-4">
            <iframe title="Giphy" src="https://giphy.com/embed/xThuWcL1bfnd1MtZGE" width="400" height="200" frameBorder="0" className="giphy-embed rounded-md" allowFullScreen></iframe>

            <div className="mt-4 sm:flex sm:items-center sm:justify-center text-white sm:gap-4">
              <strong className="font-medium">Sit up</strong>

              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

              <p className="mt-0.5 opacity-50 sm:mt-0">10 set of 12 reps</p>
            </div>
          </a>
          <a href="#" className="block py-4">
            <iframe title="Giphy" src="https://giphy.com/embed/xThuWcL1bfnd1MtZGE" width="400" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

            <div className="mt-4 sm:flex sm:items-center sm:justify-center text-white sm:gap-4">
              <strong className="font-medium">Company Name</strong>

              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

              <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
          <a href="#" className="block py-4">
            <iframe title="Giphy" src="https://giphy.com/embed/MxqKKnUJdSd3i" width="400" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

            <div className="mt-4 sm:flex sm:items-center sm:justify-center text-white sm:gap-4">
              <strong className="font-medium">pull uos</strong>

              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

              <p className="mt-0.5 opacity-50 sm:mt-0">10 set of 12 reps</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
