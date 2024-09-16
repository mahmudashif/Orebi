import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import logo from "/src/assets/logo.svg";
import Container from "./Container.jsx";

const Navbar = () => {
  let navbarData = [
    {
      navitem: "Home",
      href: "/",
    },

    {
      navitem: "Shop",
      href: "",
    },

    {
      navitem: "About",
      href: "",
    },

    {
      navitem: "Contacts",
      href: "",
    },

    {
      navitem: "Journal",
      href: "",
    },
  ];

  const [show, setShow] = useState(false);
  const navShow = () => {
    setShow(!show);
  };

  return (
    <Container>
      <div className="px-8 py-8 mx-auto flex items-center justify-between">
        <div className="w-full">
          <img src={logo} alt="" />
        </div>


        <div className="max-lg:hidden">
          <ul className="flex gap-x-20">
            {navbarData.map((item, index) => (
              <li
                key={index}
                className="py-1 text-black transition-all duration-200 ease-in-out hover:text-primaryColor"
              >
                <a href={item.href} key={index}>
                  {item.navitem}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {show ? (
          <RxCross1 onClick={navShow} className="lg:hidden absolute right-8 cursor-pointer z-20 text-[#ffff] text-2xl" />
        ) : (
          <HiOutlineBars3 onClick={navShow} className="lg:hidden absolute right-8 cursor-pointer z-20 text-2xl" />
        )}
        {show && (
          <div className="lg:hidden">
            <ul className="lg:flex absolute z-10 top-0 right-0 w-[100%] text-[#ffff] bg-secondaryBg h-[100dvh]">
              {navbarData.map((item, index) => (
                <li
                  key={index}
                  className="mt-20 ml-48"
                >
                  <a href={item.href} key={index}>
                    {item.navitem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;

//   <Container>
// <section className="px-8 py-8 mx-auto flex">
//   <div className="w-3/12">
//     <img src={logo} alt="" />
//   </div>
//   <div className="w-9/12">
//     {show ? <RxCross1 onClick={navShow} className="lg:hidden" /> : <HiOutlineBars3 onClick={navShow} className="lg:hidden" />}
//     {show && (
//       <ul className="lg:flex justify-center gap-x-20 capitalize font-dm">
//       <li className="hover:font-bold">home</li>
//       <li className="hover:font-bold">shop</li>
//       <li className="hover:font-bold">about</li>
//       <li className="hover:font-bold">contacts</li>
//       <li className="hover:font-bold">journal</li>
//     </ul>
//     )}

//   </div>
// </section>
//   </Container>
