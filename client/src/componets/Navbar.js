import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About", "Contact", "Services", "Privacy Policy"];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-20 xl:px-32 flex justify-between items-center py-3">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-blue-700">
          Company Directory
        </h1>

        <div className="hidden sm:flex gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <p key={item} className="hover:text-primary cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden w-full bg-white/90 backdrop-blur-xl shadow-md flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <p
              key={item}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-primary"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
