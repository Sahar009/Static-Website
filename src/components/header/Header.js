import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import im4 from "../../assets/im4.jpg";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>The Best</span>
            <span>chess website</span>
            <span>in Nigeria</span>
          </h1>
          <p className="u-text-small">
            Chess X is a Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt quis illum id qui
            et!
          </p>
          <div className="header-cta">
            <Button text={"Gallery"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"Contact Us"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-down">
          <img src={im4} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
