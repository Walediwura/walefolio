"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header-bg"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 flex items-between justify-between ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <Link href="#top">
          <span className="font-semibold text-2xl">Walediwura</span>{" "}
          <span className="font-bold text-pink-500 text-3xl">.</span>
        </Link>

        <section
          id="ovo"
          className={`items-center gap-6 lg:gap-8 rounded-full px-12 py-3 hidden md:flex font-ovo ${
            isScroll ? "" : "bg-white/50 shadow-sm"
          }`}
        >
          <Link href="#top">Home</Link>
          <Link href="#about">About me</Link>
          <Link href="#services">Services</Link>
          <Link href="#work">My Work</Link>
          <Link href="#contact">Contact</Link>
        </section>

        <section className="flex items-center gap-4">
          <button className="cursor-pointer">
            <Image src={assets.moon_icon} alt="dark-mode" className="w-6" />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex font-ovo gap-3 items-center ml-4 border border-gray-500 rounded-full px-10 py-2.5"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="contact" className="w-3" />
          </Link>

          <button
            className="cursor-pointer block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="menu-black" className="w-6" />
          </button>
        </section>

        {/* Mobile Menu */}
        <section
          ref={sideMenuRef}
          className="flex flex-col md:hidden gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt="close"
              className="cursor-pointer w-5"
              onClick={closeMenu}
            />
          </div>
          <Link onClick={closeMenu} href="#top">
            Home
          </Link>
          <Link onClick={closeMenu} href="#about">
            About me
          </Link>
          <Link onClick={closeMenu} href="#services">
            Services
          </Link>
          <Link onClick={closeMenu} href="#work">
            My Work
          </Link>
          <Link onClick={closeMenu} href="#contact">
            Contact
          </Link>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
