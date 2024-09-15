import React from "react";
import ad_banner from "/src/assets/AdBanner.svg";
import Container from '../../components/Container.jsx'

const AdBanner = () => {
  return (
    <Container>
      <div className="mt-28">
        <img src={ad_banner} alt="" />
      </div>
    </Container>
  );
};

export default AdBanner;
