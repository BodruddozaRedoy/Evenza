import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    links: "/",
  },
  {
    title: "Events",
    links: "/events",
  },
  {
    title: "Add Event",
    links: "/add-event",
  },
  {
    title: "My Event",
    links: "/my-event",
  },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-40 mx-auto py-5 shadow-md w-full">
      {/* navbar title  */}
      <h1 className="text-4xl font-bold text-primary">Evenza</h1>

      {/* navbar links  */}
      <ul className="flex items-center gap-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.links}
              className={({ isActive }) =>
                `cursor-pointer select-none ${
                  isActive ? "text-primary font-semibold" : "hover:text-[#ED4A43]"
                }`
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* navbar end (Sign In / Avatar dropdown) */}
      <div>
        <button className="bg-primary py-3 px-5 mt-5 text-white rounded-md cursor-pointer select-none">
          Sign In
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xl btn-circle avatar"
          >
            <div className="w-20 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>UserName</li>
            <button className="bg-primary py-3 px-5 mt-5 text-white rounded-md cursor-pointer select-none">
              LogOut
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
