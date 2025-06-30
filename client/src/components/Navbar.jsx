import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react"; // optional: install lucide-react for icons

const navLinks = [
  { title: "Home", links: "/" },
  { title: "Events", links: "/events" },
  { title: "Add Event", links: "/add-event" },
  { title: "My Event", links: "/my-event" },
];

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => logout();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* <h1 className="text-3xl font-bold text-primary">Evenza</h1> */}
        <img className="w-40" src="/logo.png" alt="" />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.links}
              className={({ isActive }) =>
                `cursor-pointer select-none ${
                  isActive ? "text-primary font-semibold" : "hover:text-[#ED4A43]"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link to="/login">
              <button className="bg-primary text-white py-2 px-4 rounded-md">Sign In</button>
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="px-2 font-semibold">{user?.name}</li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-primary text-white py-2 px-4 rounded-md"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white border-t">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.links}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-primary font-semibold" : "hover:text-[#ED4A43]"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}

          {!user ? (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-primary text-white py-2 rounded-md">
                Sign In
              </button>
            </Link>
          ) : (
            <div className="pt-2 space-y-2">
              <p className="text-gray-700 font-medium">{user?.name}</p>
              <button
                onClick={() => {
                  handleLogOut();
                  setMenuOpen(false);
                }}
                className="w-full bg-primary text-white py-2 rounded-md"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
