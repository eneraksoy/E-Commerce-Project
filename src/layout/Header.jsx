// src/layout/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Mobil Menü */}
      <div className="flex justify-between items-center px-6 py-4 lg:px-8 lg:hidden">
        <div className="text-xl lg:text-2xl font-bold">BrandName</div>
        <div className="flex space-x-4">
          <button>
            <i className="fas fa-search text-gray-700 text-xl"></i>
          </button>
          <button>
            <i className="fas fa-shopping-cart text-gray-700 text-xl"></i>
          </button>
          <button className="focus:outline-none">
            <i className="fas fa-bars text-gray-700 text-xl"></i>
          </button>
        </div>
      </div>
      <nav className="flex flex-col items-center py-4 space-y-4 lg:hidden text-gray-500 text-2xl">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/shop" className="">
          Shop
        </Link>
        <Link to="#product" className="">
          Product
        </Link>
        <Link to="#pricing" className="">
          Pricing
        </Link>
        <Link to="#contact" className="">
          Contact
        </Link>
      </nav>

      {/* Masaüstü Menü */}
      <div className="hidden lg:flex justify-between items-center px-8 py-4">
        <nav className="flex space-x-8 ml-60 gap-5 text-[#737373] font-bold">
          <div className="text-xl lg:text-2xl font-bold pr-24 text-black">
            BrandName
          </div>
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/shop" className="">
            Shop
          </Link>
          <Link to="#about" className="">
            About
          </Link>
          <Link to="#blog" className="">
            Blog
          </Link>
          <Link to="#contact" className="">
            Contact
          </Link>
          <Link to="#pages" className="">
            Pages
          </Link>
        </nav>
        <div className="flex space-x-4 text-[#23A6F0] gap-5 mr-60">
          <button className="text-lg">
            <i className="fas fa-user"></i> Login / Register
          </button>
          <button>
            <i className="fas fa-search text-xl"></i>
          </button>
          <button>
            <i className="fas fa-shopping-cart text-xl"></i>
          </button>
          <button>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
