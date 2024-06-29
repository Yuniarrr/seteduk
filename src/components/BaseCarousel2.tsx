/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

interface Slides {
  slides: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  hideArrow?: boolean;
  customGap?: string;
}

const BaseCarousel2 = ({
  slides,
  autoSlide = true,
  autoSlideInterval = 3000,
  hideArrow = false,
  customGap,
}: Slides) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row w-full items-center justify-between">
        <button
          onClick={prev}
          className={`p-1 rounded-full ${hideArrow ? 'hidden' : 'block'}`}>
          <svg
            className="xl:w-20 xl:h-20 lg:w-14 lg:h-14 md:w-10 md:h-10"
            viewBox="0 0 61 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M57.0883 92.6544V7.64004L5.64378 50.1472L57.0883 92.6544Z"
              stroke="#38387E"
              stroke-width="7"
            />
          </svg>
        </button>
        <div className="overflow-hidden relative mx-4">
          <div
            className="flex transition-transform ease-out duration-500 rounded-3xl"
            style={{ transform: `translateX(-${curr * 100}%)` }}>
            {slides.map((slide, index) => (
              <div className="min-w-full flex items-center justify-center">
                <img
                  key={index}
                  src={slide}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className={`p-1 rounded-full ${hideArrow ? 'hidden' : 'block'}`}>
          <svg
            className="xl:w-20 xl:h-20 lg:w-14 lg:h-14 md:w-10 md:h-10"
            viewBox="0 0 61 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.91168 92.6544V7.64004L55.3562 50.1472L3.91168 92.6544Z"
              stroke="#38387E"
              stroke-width="7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`flex items-center justify-center gap-2 ${
          customGap ? customGap : 'mt-4 md:mt-8'
        }`}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-1.5 h-1.5 bg-american-blue rounded-full  ${
              curr === i ? 'p-0.5' : 'bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BaseCarousel2;
