// import { Link } from 'react-router-dom';
import { oldCategory } from '../utils/data';

export default function CardSection() {
  return (
    <section id='card'>
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
          <a href={`/gender?age=15`} className="block bg-[#354C2F] rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
            <img alt="Art" src={oldCategory.teenage} className="h-72  w-full object-cover rounded-t-md" />

            <h3 className="my-2 px-2 text-lg font-semibold text-white text-center font-">Age : 15-21</h3>
          </a>
          <a href={`/gender?age=22`} className="block bg-[#354C2F] rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
            <img alt="Art" src={oldCategory.adult} className="h-72  w-full object-cover rounded-t-md" />

            <h3 className="my-2 px-2 text-lg font-semibold text-white text-center">Age : 22-39</h3>
          </a>
          <a href={`/gender?age=36`} className="block bg-[#354C2F] rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
            <img alt="Art" src={oldCategory.old_man} className="h-72  w-full object-cover rounded-t-md" />

            <h3 className="my-2 px-2 text-lg font-semibold text-white text-center">Age : 39+</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
