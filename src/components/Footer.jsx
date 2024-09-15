import React from "react";
import FooterLogo from "/src/assets/FooterLogo.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  let menu = [
    {
      title: "Home",
      href: "",
    },
    {
      title: "Shop",
      href: "",
    },
    {
      title: "About",
      href: "",
    },
    {
      title: "Contact",
      href: "",
    },
    {
      title: "Journal",
      href: "",
    },
  ];

  let shop = [
    {
      title: "Category 1",
      href: "",
    },
    {
      title: "Category 2",
      href: "",
    },
    {
      title: "Category 3",
      href: "",
    },
    {
      title: "Category 4",
      href: "",
    },
    {
      title: "Category 5",
      href: "",
    },
  ];

  let help = [
    {
      title: "Privacy Policy",
      href: "",
    },
    {
      title: "Terms & Conditions",
      href: "",
    },
    {
      title: "Special E-shop",
      href: "",
    },
    {
      title: "Shipping",
      href: "",
    },
    {
      title: "Secure Payments",
      href: "",
    },
  ];

  return (
    <div className="bg-[#F5F5F3] mt-20">
      <div className="py-14 pl-40 flex">
        <div className="w-2/4 flex gap-x-[143px]">
          <div>
            <h3 className="font-dm font-bold text-base mb-8">MENU</h3>
            <ul>
              {menu.map((item, index) => (
                <li className="mb-3 text-[#6D6D6D]">{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-dm font-bold text-base mb-8">SHOP</h3>
            <ul>
              {shop.map((item, index) => (
                <li className="mb-3 text-[#6D6D6D]">{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-dm font-bold text-base mb-8">HELP</h3>
            <ul>
              {help.map((item, index) => (
                <li className="mb-3 text-[#6D6D6D]">{item.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-2/4 flex gap-x-[143px]">
          <div>
            <h3 className="font-dm font-bold text-base mb-3">
              (052) 611-5711
              <br />
              company@domain.com
            </h3>
            <p className="text-[#6D6D6D] font-dm text-base">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div>
            <img src={FooterLogo} alt="" />
          </div>
        </div>
      </div>

      <div className="flex  justify-between px-40 pb-10">
        <div className="flex gap-x-10 text-2xl">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
        <div>
          <p className="font-dm text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
