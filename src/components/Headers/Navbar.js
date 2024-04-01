import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setClick(true) : setClick(false);
    });
  }); 

  return (
    <div
      className={`w-full text-white fixed mt-0 py-4 z-50 ${
        click ? "bg-blue-700" : ""
      }`}
    >
      <div className="container w-[90%] mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-green-300">Grow-life</h1>
        </div>
        <ul className="flex gap-6 px-2">
          <li className="cursor-pointer text-l font-serif hover:bg-green-600 px-3 py-2 rounded-full">
            Home
          </li>
          <li className="cursor-pointer text-l font-serif hover:bg-green-600 px-3 py-2 rounded-full">
            About us
          </li>
          <li className="cursor-pointer text-l font-serif hover:bg-green-600 px-3 py-2 rounded-full">
            Profile
          </li>
          <li className="cursor-pointer text-l font-serif hover:bg-green-600 px-3 py-2 rounded-full">
            Campus
          </li>
          <li className="cursor-pointer text-l font-serif hover:bg-green-600 px-3 py-2 rounded-full">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
