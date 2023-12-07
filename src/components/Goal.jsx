import { useSearchParams } from 'react-router-dom';
import { goals } from '../utils/data';

export default function Goal() {
  const [searchParams,] = useSearchParams();
  const bmiClass = searchParams.get('bmi');
  const age = searchParams.get('age');
  const gender = searchParams.get('gender');

  return (
    <section>
      <div className="bg-black h-screen">
        <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:pt-16 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-4xl font-bold sm:text-5xl xl:max-w-md text-white">What's Your <span className='text-[#ff5050]'>Goal?</span></h1>
        </div>
        <div className="flex md:flex-row flex-col gap-20 justify-center p-4 items-center ">
          <a href={`/workrecom?wo=strength&bmi=${bmiClass}&age=${age}&gender=${gender}`} class="block relative rounded-md overflow-hidden transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2 bg-[#354C2F]">
            <img alt="Art" src={goals.lean} class="h-72 w-full object-cover rounded-t-md" />
            <div class="z-50 overlay absolute inset-0 bg-black opacity-0.5 hover:flex items-center justify-center text-white text-2xl font-bold hidden">Lean Workout</div>
              <p className='text-white text-center font-semibold px-2 text-lg py-2'>Muscle Strength</p>
          </a>
          {bmiClass == "Overweight" ? (
            <a href={`/workrecom?wo=lose_fat&bmi=${bmiClass}&age=${age}&gender=${gender}`} className="block rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2 bg-[#354C2F]">
              <img alt="Art" src={goals.bulking_2} className="h-72  w-full object-cover rounded-t-md" />
              <p className='text-white font-semibold text-center px-2 py-2 text-lg'>Fat Loss</p>
            </a>

          ) : (
            <div className="block bg-[#354C2F] rounded-md transition-transform">
              <img
                alt="Art"
                src={goals.bulking_2}
                className="h-72 w-full object-cover rounded-md grayscale transition-all duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
