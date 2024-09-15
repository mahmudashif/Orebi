import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import logo from "/src/assets/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false);
  const abc = () => {
    setShow(!show);
  };

  return (
    <section className="container px-8 py-8 mx-auto flex">
      <div className="w-3/12">
        <img src={logo} alt="" />
      </div>
      <div className="w-9/12">
        {show ? <RxCross1 onClick={abc} /> : <HiOutlineBars3 onClick={abc} />}
        {show && (
          <ul className="flex justify-center gap-x-20 capitalize font-dm">
          <li className="hover:font-bold">home</li>
          <li className="hover:font-bold">shop</li>
          <li className="hover:font-bold">about</li>
          <li className="hover:font-bold">contacts</li>
          <li className="hover:font-bold">journal</li>
        </ul>
        )}
        
      </div>
    </section>
  );
};

export default Navbar;
