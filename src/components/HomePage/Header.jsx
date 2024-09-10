import Container from "../Container";
import Dropdown from "../Dropdown";
import React, { useState } from "react";
import SearchBox from "./SearchBox";

const Header = () => {
  let [show, setShow] = useState(false);

  let showDropdown = () => {
    setShow(!show);
  };

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

          <div className="items-center">c</div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
