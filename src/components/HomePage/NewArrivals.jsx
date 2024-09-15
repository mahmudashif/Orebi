import React from "react";
import Container from "../Container";
import NewArrival1 from "/src/assets/NewArrival1.svg";
import NewArrival2 from "/src/assets/NewArrival2.svg";
import NewArrival3 from "/src/assets/NewArrival3.svg";
import NewArrival4 from "/src/assets/NewArrival4.svg";
import NewArrival5 from "/src/assets/NewArrival5.svg";
import NewArrival6 from "/src/assets/NewArrival6.svg";
import NewArrival7 from "/src/assets/NewArrival7.svg";
import NewArrival8 from "/src/assets/NewArrival8.svg";
import Heading from "../Heading";
import Badge from "../Badge";
import WishListHover from "../WishListHover";

const NewArrivals = () => {
  return (
    <div className="mt-[140px] mb-10">
      <Container>
        <Heading title="New Arrivals" />
        <div className="flex justify-between mt-12 relative">
          <div>
            <div className="relative overflow-y-hidden group">
              <img className="max-w-[350px]" src={NewArrival1} alt="" />
              <Badge title="10%" />
              <WishListHover />
            </div>
            <div className="flex justify-between mt-6">
              <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
              <p className="text-primaryBg">$44.00</p>
            </div>
            <p className="text-primaryBg mt-5">Black</p>
          </div>

          <div>
            <div className="relative overflow-y-hidden group">
              <img className="max-w-[350px]" src={NewArrival2} alt="" />
              <Badge title="New" />
              <WishListHover />
            </div>
            <div className="flex justify-between mt-6">
              <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
              <p className="text-primaryBg">$44.00</p>
            </div>
            <p className="text-primaryBg mt-5">Black</p>
          </div>

          <div>
            <div className="relative overflow-y-hidden group">
              <img className="max-w-[350px]" src={NewArrival3} alt="" />
              <Badge title="New" />
              <WishListHover />
            </div>
            <div className="flex justify-between mt-6">
              <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
              <p className="text-primaryBg">$44.00</p>
            </div>
            <p className="text-primaryBg mt-5">Black</p>
          </div>

          <div>
            <div className="relative overflow-y-hidden group">
              <img className="max-w-[350px]" src={NewArrival4} alt="" />
              <Badge title="New" />
              <WishListHover />
            </div>
            <div className="flex justify-between mt-6">
              <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
              <p className="text-primaryBg">$44.00</p>
            </div>
            <p className="text-primaryBg mt-5">Black</p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex justify-between mt-28">
        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival5} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>

        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival6} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>

        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival7} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>

        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={NewArrival8} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
