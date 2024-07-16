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
      <div className="flex flex-row justify-between">
        {/* <div className="w-1"></div> */}
        <img
          src={Buntel3}
          alt="md:-mt-[3.7rem]"
          className="object-cover lg:w-[25%] lg:-mt-[2rem] xl:w-[20%] xl:-mt-[5.5rem] hidden md:block w-1/3"
        />
        <div className="md:max-w-xl w-2/3">
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
                onClick={() =>
                  copyToClipboard('seteduk.itsgmail.com', 'email')
                }>
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
              <a
                href="https://www.facebook.com/people/Sego-Telang-Uduk-Seteduk/pfbid02h62yrAiJJY9HaLSU6jsj6NgB51PW8trCjgnEBT9SMFVaSbEe6K4L74scYkUityDdl/"
                target="__blank">
                <svg
                  fill="#000000"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@seteduk"
                target="__blank">
                <svg
                  fill="#000000"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  id="icons"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-maximum-yellow-red items-center w-full flex justify-center py-0.5">
        <p className="text-center text-white font-light md:text-base text-xs">
          2024 | PKM-K ITS | SETEDUK
        </p>
      </div>
    </>
  );
};

export default Footer;
