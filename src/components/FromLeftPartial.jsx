import { useState } from 'react';
import Logo from '../assets/logo.svg';

export default function FromLeftPartial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 flex justify-center items-center  px-6 lg:px-10 py-4 mx-0 h-20 ${
          isOpen ? 'bg-transparent' : 'bg-neutral-950'
        } ease-in-out duration-200`}
      >
        <p
          className={`text-3xl font-bold text-stone-100 ${isOpen && 'hidden'}`}
        >
          <img src={Logo} className='text-stone-100 w-44 md:w-64 '/>
        </p>

        <div
          className="absolute left-6 lg:left-10 top-7.5 space-y-2 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            class={`block w-8 h-0.5 bg-stone-100 ${
              isOpen
                ? 'rotate-[135deg] translate-y-2.5'
                : 'rotate-0 translate-y-0'
            } ease-in-out duration-200`}
          ></span>
          <span
            class={`block w-8 h-0.5 bg-stone-100 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            } ease-in-out duration-200`}
          ></span>
          <span
            class={`block w-8 h-0.5 bg-stone-100 ${
              isOpen
                ? '-rotate-[135deg] -translate-y-2.5'
                : 'rotate-0 translate-y-0'
            } ease-in-out duration-200`}
          ></span>
        </div>
      </div>

      <aside
        className={`flex flex-col items-center justify-center h-full w-full md:w-2/5 lg:w-1/3 top-0 left-0 fixed bg-neutral-950 px-4 lg:px-10 py-4 z-0 ${
          isOpen ? 'translate-x-0 opacity-80' : '-translate-x-full opacity-100'
        } ease-in-out duration-200 `}
      >
        <ul className="w-[75%] text-center">
          <li
            className={`text-stone-100 text-3xl font-semibold py-2 mb-6 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } ease-out duration-500 delay-[100ms]`}
          >
            LINK 1
          </li>
          <li
            className={`text-stone-100 text-3xl font-semibold py-2 mb-6 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } ease-out duration-500 delay-[150ms]`}
          >
            LINK 1
          </li>
          <li
            className={`text-stone-100 text-3xl font-semibold py-2 mb-6 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } ease-out duration-500 delay-[200ms]`}
          >
            LINK 1
          </li>
          <li
            className={`text-stone-100 text-3xl font-semibold py-2 mb-6 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } ease-out duration-500 delay-[250ms]`}
          >
            LINK 1
          </li>
          <li
            className={`text-stone-100 text-3xl font-semibold py-2 mb-6 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } ease-out duration-500 delay-[300ms]`}
          >
            LINK 1
          </li>
          <li
            className={`text-stone-100 text-3xl font-semibold py-2 mb-6 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } ease-out duration-1000 delay-[350ms]`}
          >
            LINK 1
          </li>
        </ul>
      </aside>
    </>
  );
}
