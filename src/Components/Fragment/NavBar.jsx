import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 w-[98%] mx-auto">
      <div className="flex items-center justify-between px-8 py-6 rounded-[100px] backdrop-blur-md bg-white/5 border border-white/15 shadow-sm relative z-50">
        <Logo />

        <div className="hidden lg:flex gap-6">
          <Content text="Beranda" to="beranda" />
          <Content text="Tentang" to="tentang" />
          <Content text="Pendidikan" to="pendidikan" />
          <Content text="Projek" to="projek" />
          <Content text="Sertifikat" to="sertifikat" />
          <Content text="Kontak" to="kontak" />
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 focus:outline-none z-50"
        >
          <span className={`w-8 h-1 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-8 h-1 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-1 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-24 left-0 w-full rounded-3xl backdrop-blur-xl bg-white/5 border border-white/15 shadow-xl transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Content text="Beranda" to="beranda" onClick={closeMenu} />
          <Content text="Tentang" to="tentang" onClick={closeMenu} />
          <Content text="Pendidikan" to="pendidikan" onClick={closeMenu} />
          <Content text="Projek" to="projek" onClick={closeMenu} />
          <Content text="Sertifikat" to="sertifikat" onClick={closeMenu} />
          <Content text="Kontak" to="kontak" onClick={closeMenu} />
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return <p className="font-bold text-2xl font-Poppins cursor-pointer">@cokvrinda</p>;
};

const Content = ({ text, to, onClick }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      onClick={onClick}
      className="text-xl font-Poppins cursor-pointer transition-all duration-300 ease-in-out hover:font-bold hover:scale-105"
    >
      {text}
    </Link>
  );
};

export default NavBar;
