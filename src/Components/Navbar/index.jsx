import { useState } from "react";
import Container from "../Container";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="bg-primary text-white py-3 sticky top-0">
      <Container>
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex gap-3 items-center">
            <img src="/qarabagh.png" alt="Qarabag FK logo" className="w-12" />
            <p className="uppercase text-2xl">Qarabag FK</p>
          </Link>
          
          {/* Menu */}
          <div
            className={`items-center gap-6 md:flex
              ${
                showMobileMenu
                  ? "flex md:hidden flex-col absolute top-full right-0 bg-primary h-screen w-full border-t border-slate-200 justify-center"
                  : "hidden"
              }
            `}
          >
            <NavLink className="text-lg" to="/">
              Ana səhifə
            </NavLink>

            {/* Dropdown */}
            <NavLink to="/team" className="relative group">
              <span className="text-lg">Komanda</span>

              <div className="absolute left-0 mt-2 flex flex-col w-40 rounded-md bg-white shadow-md invisible group-hover:visible">
                <NavLink
                  className="text-slate-800 p-3 hover:bg-slate-200 border-b"
                  to="/team/players"
                >
                  Oyunçular
                </NavLink>
                <NavLink
                  className="text-slate-800 p-3 hover:bg-slate-200 border-b"
                  to="/team/coaches"
                >
                  Məşqçilər
                </NavLink>
                <NavLink
                  className="text-slate-800 p-3 hover:bg-slate-200"
                  to="/team/staff"
                >
                  Texniki heyət
                </NavLink>
              </div>
            </NavLink>

            <NavLink className="text-lg" to="/news">
              Xəbərlər
            </NavLink>
            <NavLink className="text-lg" to="/contact">
              Əlaqə
            </NavLink>
          </div>

          {/* Mobile button */}
          <button
            className="cursor-pointer block md:hidden"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
