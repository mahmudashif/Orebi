import Container from '../../components/Container.jsx'
import Dropdown from "../../components/Dropdown.jsx";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  // show shop by category part dropdown
  let [show, setShow] = useState(false);

  let showDropdown = () => {
    setShow(!show);
  };

  // show profile part dropdown
  let [profileShow, setProfileShow] = useState(false);

  let profileDropdown = () => {
    setProfileShow(!profileShow);
  };

  // show card part dropdown
  let [cartShow, setCartShow] = useState();

  let cartDropdown = () => {
    setCartShow(!cartShow);
    console.log("paisi");
  }

  return (
    <div className="bg-[#F5F4F3] py-6">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <Dropdown className="relative" onClick={showDropdown}>
              <div className="flex relative items-center gap-x-2.5">
                <img
                  className="cursor-pointer"
                  src="/src/assets/shopByCategory.svg"
                  alt=""
                />
                <p className="cursor-pointer">Shop by Category</p>
                {show && (
                  <ul className="absolute mt-[420px] ml-10 text-primaryBg bg-secondaryBg w-[263px]">
                    <li className="px-5 py-4 hover:text-[#ffffff] border border-solid border-[#2D2D2D] hover:ml-4">
                      Accesories
                    </li>
                    <li className="px-5 py-4 hover:text-[#ffffff] border border-solid border-[#2D2D2D] hover:ml-4">
                      Furniture
                    </li>
                    <li className="px-5 py-4 hover:text-[#ffffff] border border-solid border-[#2D2D2D] hover:ml-4">
                      Electronics
                    </li>
                    <li className="px-5 py-4 hover:text-[#ffffff] border border-solid border-[#2D2D2D] hover:ml-4">
                      Clothes
                    </li>
                    <li className="px-5 py-4 hover:text-[#ffffff] border border-solid border-[#2D2D2D] hover:ml-4">
                      Bags
                    </li>
                    <li className="px-5 py-4 hover:text-[#ffffff] border border-solid border-[#2D2D2D] hover:ml-4">
                      Home appliances
                    </li>
                  </ul>
                )}
              </div>
            </Dropdown>
          </div>

          <div className="items-center">
            <SearchBox />
          </div>

          <div className="items-center flex gap-x-10">
            <div>
              <Dropdown onClick={profileDropdown} className="relative cursor-pointer">
                <img src="/src/assets/headerUserIcon.svg" alt="" />
                {profileShow && (
                  <div className="absolute mt-11 ml-3">
                    <div className="w-[200px] h-[50px] hover:bg-[#ffff] hover:text-secondaryBg text-[#ffff] cursor-pointer bg-secondaryBg text-center text-xl font-semibold font-dm">
                      My Account
                    </div>
                    <div className="w-[200px] h-[50px] hover:bg-secondaryBg hover:text-[#ffff] text-center text-xl font-semibold font-dm cursor-pointer">
                      Log Out
                    </div>
                  </div>
                )}
              </Dropdown>
            </div>

            <div>
              <Dropdown onClick={cartDropdown} className="relative cursor-pointer">
              <img src="/src/assets/headerCartIcon.svg" alt="" />
              {cartShow && (
                <div className="absolute mt-11 ml-[-340px]">
                  <div className="w-[360px] h-[120px] bg-secondaryBg flex items-center justify-around">
                    <div className="h-20 w-20 bg-primaryBg"></div>
                    <div className="text-[#ffff]">
                      <p>Black Smart Watch</p>
                      <p>$44.00</p>
                    </div>
                    <div className="text-[#ffff]">
                    <RxCross1/>
                    </div>
                  </div>
                  <div className="w-[360px] h-[120px] pt-8">
                    <p className="text-2xl">Subtotal: <span className="font-bold">$44.00</span></p>
                    <div className="flex justify-between pt-4">
                    <button className="text-xl font-bold border border-solid border-[#00000] py-4 px-10">View Cart</button>
                    <button className="text-xl font-bold border border-solid border-[#00000] py-4 px-10">Checkout</button>
                    </div>
                  </div>
                </div>
              )}
              </Dropdown>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
