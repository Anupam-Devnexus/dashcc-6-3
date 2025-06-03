import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPowerOff, FaHammer } from "react-icons/fa6";
import { MdDashboard, MdOutlineProductionQuantityLimits, MdQuestionAnswer } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { LuListOrdered } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { IoIdCardOutline } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { MdOutlinePermMedia } from "react-icons/md";

export default function Nav() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-col justify-between h-[100dvh] w-16 lg:w-32 bg-[var(--var-red-col)] text-white shadow-md transition-all duration-300">
      {/* Logo */}
      <div className="p-1">
        <img
          src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1748406099/name_logos-2_jarb3o.png"
          alt="Cervino Ceramix Logo"
          className=""
        />
      </div>

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="flex flex-col gap-4 p-1 text-sm">
          <li onClick={() => handleNavigate('/')} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <MdOutlineDashboardCustomize className="text-lg text-white" /> <span className="hidden lg:inline">Dashboard</span>
          </li>
          <li onClick={() => handleNavigate('/products')} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <MdOutlineProductionQuantityLimits className="text-lg" /> <span className="hidden lg:inline">Products</span>
          </li>
          <li onClick={() => handleNavigate("/bids")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <FaHammer className="text-lg" /> <span className="hidden lg:inline">Bids</span>
          </li>
           <li onClick={() => handleNavigate("/blogs")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <FaBlog className="text-lg" /> <span className="hidden lg:inline">Blogs</span>
          </li>
          <li onClick={() => handleNavigate("/enquiry")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <MdQuestionAnswer className="text-lg" /> <span className="hidden lg:inline">Enquiry</span>
          </li>
          {/* <li onClick={() => handleNavigate("/orders")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <LuListOrdered className="text-lg" /> <span className="hidden lg:inline">Orders</span>
          </li> */}
          <li onClick={() => handleNavigate("/review")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <GoCodeReview className="text-lg" /> <span className="hidden lg:inline">Review</span>
          </li>
          <li onClick={() => handleNavigate("/brochures")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <IoIdCardOutline className="text-lg" /> <span className="hidden lg:inline">Brochures</span>
          </li>
          <li onClick={() => handleNavigate("/media")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <MdOutlinePermMedia className="text-lg" /> <span className="hidden lg:inline">Media</span>
          </li>
          <li onClick={() => handleNavigate("/location")} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded">
            <GrLocationPin className="text-lg" /> <span className="hidden lg:inline">Locations</span>
          </li>

        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 flex flex-col gap-4 text-white items-center font-medium text-sm">
        <div className="hidden lg:block leading-tight">
          {/* <i className="text-gray-100">Welcome Vansh</i> */}
        </div>
        <div
          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition"
          title="Logout"
        >
          <FaPowerOff />
        </div>
      </div>
    </nav>
  );
}
