import { oldCategory } from '../utils/data';

export default function CardSection() {
  return (
    <section>
      <div className="bg-black py-10">
        <div className="container flex flex-col items-center px-4 py-8  mx-auto text-center  md:py-16 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-md text-white">
            Build Your{' '}
            <span className="text-red-500">
              Perfect Body <br />{' '}
            </span>
          </h1>
        </div>
        <div className="flex md:flex-row flex-col gap-10 justify-center p-4 items-center">
          <a href="#" className="block bg-[#354C2F] rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
            <img alt="Art" src={oldCategory.teenage} className="h-72  w-full object-cover rounded-t-md" />

            <h3 className="my-2 px-2 text-lg font-semibold text-gray-900 text-center">Age : 15-21</h3>
          </a>
          <a href="#" className="block bg-[#354C2F] rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
            <img alt="Art" src={oldCategory.adult} className="h-72  w-full object-cover rounded-t-md" />

            <h3 className="my-2 px-2 text-lg font-semibold text-gray-900 text-center">Age : 15-21</h3>
          </a>
          <a href="#" className="block bg-[#354C2F] rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
            <img alt="Art" src={oldCategory.old_man} className="h-72  w-full object-cover rounded-t-md" />

            <h3 className="my-2 px-2 text-lg font-semibold text-gray-900 text-center">Age : 15-21</h3>
          </a>

          
        </div>
      </div>
      {/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" /> */}
    </section>
  );
}