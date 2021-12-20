import React from "react";

const Navbar = () => {
  return (
    <div className="font-sans bg-white flex flex-col">
      <div>
        <div className="bg-white px-4 py-4">
          <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
            <div>
              <a
                href="#"
                className="inline-block py-2 text-gray-800 text-2xl font-bold"
              >
                jagsymusic
              </a>
            </div>

            <div>
              <div className="hidden md:block">
                <a
                  href="#"
                  className="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
                >
                  Music
                </a>
                <a
                  href="#"
                  className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                >
                  About me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
