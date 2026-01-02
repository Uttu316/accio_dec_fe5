import "./header.css";
import logo from "../../assets/react.svg";
import React from "react";

const Header = (props) => {
  const { title = "Hello" } = props;
  console.log("rendering header");
  return (
    <header className="app_header">
      <div className="app_logo_side">
        <img src={logo} alt="App Logo" height="40" />
        <h1>{title}</h1>
      </div>
      <nav className="app_nav">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default React.memo(Header);
