import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-500 px-8 py-3" >
      <div className="flex items-center justify-center gap-7" >
        <Link to="/">
          <img
          className="h-7"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          />
        </Link>
        <Link to="/">
          <span className="text-white text-[16px] font-semibold" >Homepage</span>
        </Link>
        <Link to="/movies">
          <span className="text-white text-[16px] font-semibold" >Movies</span>
        </Link>
        <Link to="/series">
          <span className="text-white text-[16px] font-semibold" >Series</span>
        </Link>
        <Link to="/new_and_popular">
          <span className="text-white text-[16px] font-semibold" >New and Popular</span>
        </Link>
        <Link to="/list">
          <span className="text-white text-[16px] font-semibold" >List</span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-6" >
        <AiOutlineSearch className="text-white text-2xl" />
        <IoMdNotifications className="text-white text-2xl" />
        <CgProfile className="text-white text-2xl" />
        <IoMdArrowDropdown className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
