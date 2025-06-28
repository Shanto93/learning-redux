import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 transition font-medium ${
      isActive ? "text-green-400" : "text-red-400"
    }`;

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
            TODO App
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg">
            <div>
              <ModeToggle></ModeToggle>
            </div>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/users" className={navLinkClass}>
              Users
            </NavLink>
            <NavLink to="/tasks" className={navLinkClass}>
              Tasks
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-500 px-4 pb-4 space-y-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/users" className={navLinkClass}>
            Users
          </NavLink>
          <NavLink to="/tasks" className={navLinkClass}>
            Tasks
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
