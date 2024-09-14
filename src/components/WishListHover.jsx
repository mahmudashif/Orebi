import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRestartAlt } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const WishListHover = () => {
  return (
    <div className="bg-[#ffff] font-dm absolute w-[350px] h-[156px] bottom-[-45%] group-hover:bottom-0 transition duration-300 ease-in-out left-0 text-primaryBg items-center flex justify-end">
      <div className="text-end">
        <p className="">
          Add to Wish List <FaHeart className="inline-block ml-3" />
        </p>
        <p className="pt-3">
          Compare
          <MdOutlineRestartAlt className="inline-block ml-3" />
        </p>
        <p className="pt-3">
          Add to Cart
          <FaShoppingCart className="inline-block ml-3" />
        </p>
      </div>
    </div>
  );
};

export default WishListHover;
