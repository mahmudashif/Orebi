import React from "react";
import Container from "../Container";
import NewArrival1 from "/src/assets/NewArrival1.svg";
import NewArrival2 from "/src/assets/NewArrival2.svg";
import NewArrival3 from "/src/assets/NewArrival3.svg";
import NewArrival4 from "/src/assets/NewArrival4.svg";
import Heading from "../Heading";
import Badge from "../Badge";
import WishListHover from "../WishListHover";

const NewArrivals = () => {
  return (
    <div className="mt-[140px] mb-10">
      <Container>
        <Heading title="New Arrivals" />
        <div className="flex justify-between mt-12 relative">
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival1} alt="" />
            <Badge title="10%" />
            <WishListHover />
          </div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival2} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival3} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival4} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
        </div>
      </Container>

      {/* <div className="bg-secondaryBg font-dm max-w-[370px] h-[156px] text-[#ffff] items-center flex justify-end">
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
      </div> */}
    </div>
  );
};

export default NewArrivals;
