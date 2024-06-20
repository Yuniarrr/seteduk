import React from 'react';
import Instagram from './logo/Instagram';

const Footer = () => {
  return (
    <div className="w-full">
      <div className="mx-10 flex flex-col items-end my-10 xl:my-14 gap-y-4">
        <p className="bg-bright-gray text-independence px-3 rounded-lg">
          Follow Us
        </p>
        <div className="flex flex-row items-center gap-x-2">
          <svg
            className="md:w-6 md:h-6 w-5 h-5 text-eerie-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          <a
            href="mailto:seteduk.itsgmail.com"
            className="font-semibold text-eerie-black md:text-2xl text-lg">
            seteduk.itsgmail.com
          </a>
          <svg
            className="md:w-6 md:h-6 w-5 h-5 text-eerie-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"
            />
          </svg>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <Instagram color="text-eerie-black" />
          <a
            href="https://www.instagram.com/seteduk"
            target="__blank"
            className="font-semibold text-eerie-black md:text-2xl text-lg">
            instagram.com/seteduk
          </a>
          <svg
            className="md:w-6 md:h-6 w-5 h-5 text-eerie-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"
            />
          </svg>
        </div>
        <p className="text-independence md:text-base text-xs text-right">
          You may also find me on these platforms!
        </p>
        <div className="flex flex-row items-center gap-x-2">
          <svg
            className="md:w-6 md:h-6 w-5 h-5 text-eerie-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            className="md:w-6 md:h-6 w-5 h-5 text-eerie-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="bg-maximum-yellow-red items-center flex justify-center py-0.5">
        <p className="text-center text-white font-light md:text-base text-xs">
          2024 | PKM-K ITS | SETEDUK
        </p>
      </div>
    </div>
  );
};

export default Footer;
