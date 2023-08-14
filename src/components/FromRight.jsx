import { useState } from 'react';

export default function FromRight() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="bg-neutral-950 flex justify-between items-center px-4 lg:px-10 py-4 mx-0">
        <p className="text-stone-100 z-10">KNDL</p>
        <div className="space-y-2 z-10" onClick={() => setIsOpen(!isOpen)}>
          <span
            class={`block w-8 h-0.5 bg-stone-100 ${
              isOpen ? 'rotate-45 translate-y-2.5' : 'rotate-0 translate-y-0'
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
                ? '-rotate-45 -translate-y-2.5'
                : 'rotate-0 translate-y-0'
            } ease-in-out duration-200`}
          ></span>
        </div>
      </div>

      <aside
        className={`flex flex-col items-center justify-center h-full w-full top-0 right-0 fixed bg-neutral-950 px-4 lg:px-10 py-4 z-0 ${
          isOpen ? 'translate-x-0 opacity-95' : 'translate-x-full opacity-100'
        } ease-in-out duration-200 `}
      >
        <ul className="w-[75%] text-center">
          <li className="text-stone-100 text-3xl font-semibold py-2 mb-6">
            LINK 1
          </li>
          <li className="text-stone-100 text-3xl font-semibold py-2 mb-6">
            LINK 2
          </li>
          <li className="text-stone-100 text-3xl font-semibold py-2 mb-6">
            LINK 3
          </li>
          <li className="text-stone-100 text-3xl font-semibold py-2 mb-6">
            LINK 4
          </li>
          <li className="text-stone-100 text-3xl font-semibold py-2 mb-6">
            LINK 5
          </li>
          <li className="text-stone-100 text-3xl font-semibold py-2 mb-6">
            LINK 6
          </li>
        </ul>
      </aside>
    </>
  );
}
