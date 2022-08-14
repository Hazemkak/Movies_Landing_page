import React from "react";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { RiSlideshow3Line } from "react-icons/ri";
import { BsHourglassSplit } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <AiOutlineSearch className="left-menu-icon" />
      <AiFillHome className="left-menu-icon" />
      <FaBookmark className="left-menu-icon" />
      <RiSlideshow3Line className="left-menu-icon" />
      <BsHourglassSplit className="left-menu-icon" />
    </div>
  );
}

export default Sidebar;
