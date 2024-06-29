import { useState } from 'react';
import Instagram from './logo/Instagram';
import Buntel3 from '../../public/images/butel-3.png';
import Clipboard from './logo/Clipboard';
import ClipboardCheck from './logo/ClipboardCheck';

const Footer = () => {
  const [isCopyEmail, setIsCopyEmail] = useState(false);
  const [isCopyInstagram, setIsCopyInstagram] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (type === 'email') {
          setIsCopyEmail(true);
        } else {
          setIsCopyInstagram(true);
        }
        setTimeout(() => {
          if (type === 'email') {
            setIsCopyEmail(false);
          } else {
            setIsCopyInstagram(false);
          }
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      <img
        src={Buntel3}
        alt=""
        className="object-cover object-center rounded-full absolute md:w-[43%] md:-mt-[3.7rem] lg:w-[25%] lg:-mt-[2rem] xl:w-[20%] xl:-mt-[5.5rem] hidden md:block"
      />
      <div className="w-full">
        <div className="mx-10 flex flex-col items-end my-5 xl:my-7 gap-y-4">
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
            <div
              onClick={() => copyToClipboard('seteduk.itsgmail.com', 'email')}>
              {isCopyEmail ? <ClipboardCheck /> : <Clipboard />}
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <Instagram color="text-eerie-black" />
            <a
              href="https://www.instagram.com/seteduk"
              target="__blank"
              className="font-semibold text-eerie-black md:text-2xl text-lg">
              instagram.com/seteduk
            </a>
            <div
              onClick={() =>
                copyToClipboard('instagram.com/seteduk', 'instagram')
              }>
              {isCopyInstagram ? <ClipboardCheck /> : <Clipboard />}
            </div>
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
    </>
  );
};

export default Footer;
