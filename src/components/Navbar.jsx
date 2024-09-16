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
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="max-lg:hidden">
          <ul className="flex gap-x-20">
            {navbarData.map((item, index) => (
              <li
                key={index}
                className=" py-1 text-black transition-all duration-200 ease-in-out hover:text-primaryColor"
              >
                <a href={item.href} key={index}>
                  {item.navitem}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {show ? (
          <RxCross1 onClick={navShow} className="lg:hidden absolute right-8" />
        ) : (
          <HiOutlineBars3 onClick={navShow} className="lg:hidden absolute right-8" />
        )}
        {show && (
          <div className="lg:hidden relative z-50 bg-secondaryBg w-full">
            <ul className="lg:flex gap-x-20 absolute pt-5 p-[100%] h-[100dvh] bg-secondaryBg text-[#ffff]">
              {navbarData.map((item, index) => (
                <li
                  key={index}
                  className=" py-1 text-black transition-all duration-200 ease-in-out hover:text-primaryColor"
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
