import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

const Navbar = (props: any) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = (): void => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex justify-between items-center ">
      <div className="ml-5 text-3xl text-white font-bold flex items-center relative right-8 cursor-pointer">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="this is logo"
          className="fill-white"
        />
        <p className="relative right-8">aden.</p>
      </div>
      <div className=" mt-2 mr-2 cursor-pointer">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={30}
            color="#fafafa"
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <AiOutlineMenu
            size={30}
            color="#fafafa"
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <ul className="flex gap-12 text-white font-semibold text-[16px] md:text-2xl mr-3.5 ">
              <li>
                <a href="" className="hover-text__menu">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover-text__menu">
                  Education
                </a>
              </li>
              <li>
                <a href="" className="hover-text__menu">
                  Skills
                </a>
              </li>
              <li>
                <a href="" className="hover-text__menu">
                  Contact
                </a>
              </li>
            </ul>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white bg-opacity-20 backdrop-blur-[3px] shadow-2xl p-6 text-center text-[13px] text-white font-bold border rounded-2xl ">
            <ul className="leading-7 ">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Education</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
