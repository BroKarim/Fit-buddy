import { useSearchParams } from 'react-router-dom';
import { goals } from '../utils/data';

export default function Goal() {
  const [searchParams,] = useSearchParams();
  const bmiClass = searchParams.get('bmi');
  const age = searchParams.get('age');
  const gender = searchParams.get('gender');

  return (
    <section>
      <div className="bg-black py-10">
        <div className="container flex flex-col items-center px-4 py-8  mx-auto text-center  md:py-16 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-4xl font-bold leadi sm:text-5xl xl:max-w-md text-white">Whats Your Goal?</h1>
        </div>
        <div className="flex md:flex-row flex-col gap-20 justify-center p-4 items-center">
          <a href={`/workrecom?wo=strength&bmi=${bmiClass}&age=${age}&gender=${gender}`} class="block relative rounded-md overflow-hidden transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
            <img alt="Art" src={goals.lean} class="h-72 w-full object-cover rounded-md" />
            <div class="z-50 overlay absolute inset-0 bg-black opacity-0.5 hover:flex items-center justify-center text-white text-2xl font-bold hidden">Lean Workout</div>
          </a>
          {bmiClass == "Overweight" ? (
            <a href={`/workrecom?wo=lose_fat&bmi=${bmiClass}&age=${age}&gender=${gender}`} className="block bg-[#354C2F] rounded-md transition-transform hover:scale-110 hover:-translate-x-2 hover:-translate-y-2">
              <img alt="Art" src={goals.bulking_2} className="h-72  w-full object-cover rounded-md" />
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
