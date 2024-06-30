import Instagram from './logo/Instagram';
import Seteduk from '../../public/images/seteduk.png';
import Shopee from './logo/Shopee';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = React.useState(false);

  return (
    <div className="fixed w-full z-10 top-0">
      <nav className="bg-cadmium-green border-gray-200 dark:bg-gray-900 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={Seteduk}
              className="h-8"
              alt="Seteduk Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              SeTeDuk
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            onClick={() => setIsOpenNavbar(!isOpenNavbar)}
            aria-controls="navbar-default"
            data-collapse-target="collapse-1"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                {/* <Link
                  to={'/'}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:underline hover:text-minion-yellow">
                  Beranda
                </Link> */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 px-3 text-minion-yellow rounded md:bg-transparent md:p-0 hover:underline'
                      : 'block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:underline hover:text-minion-yellow'
                  }>
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 px-3 text-minion-yellow rounded md:bg-transparent md:p-0 hover:underline'
                      : 'block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:underline hover:text-minion-yellow'
                  }>
                  Profil
                </NavLink>
              </li>
              <li className="border-l-2" />
              <li>
                <a
                  href="https://www.instagram.com/seteduk"
                  target="__blank">
                  <Instagram />
                </a>
              </li>
              <li className="border-l-2" />
              <li>
                <a
                  href="https://www.instagram.com/seteduk"
                  target="__blank">
                  <Shopee />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isOpenNavbar && (
        <div
          data-collapse="collapse-1"
          className={`block md:hidden w-full bg-cadmium-green px-5 overflow-hidden transition-all duration-300 ease-in-out`}>
          <div className="flex gap-y-2 flex-col py-2 w-full">
            <NavLink
              to="/"
              onClick={() => setIsOpenNavbar(!isOpenNavbar)}
              className={({ isActive }) =>
                isActive
                  ? 'text-minion-yellow text-base'
                  : 'text-white hover:text-minion-yellow text-base'
              }>
              Beranda
            </NavLink>
            <NavLink
              to="/profile"
              onClick={() => setIsOpenNavbar(!isOpenNavbar)}
              className={({ isActive }) =>
                isActive
                  ? 'text-minion-yellow text-base'
                  : 'text-white hover:text-minion-yellow text-base'
              }>
              Profil
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
