import React from "react";
import Container from "../Container";
import add1 from "/src/assets/ad1.svg";
import add2 from "/src/assets/ad2.svg";
import Button from "../Button";

const Advertise = () => {
  return (
    <Container>
      <div className="flex gap-x-10 mt-36">
        <div className="max-w-2/4">
          <img src={add1} alt="" />
        </div>
        <div className="max-w-2/4">
          <img className="mb-10" src={add2} alt="" />
          <img src={add2} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Advertise;
