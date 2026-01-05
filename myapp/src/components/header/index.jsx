import "./header.css";
import logo from "../../assets/react.svg";
import React from "react";
import { Link, NavLink } from "react-router";

const Header = (props) => {
  const { title = "Hello" } = props;

  return (
    <header className="app_header">
      <div className="app_logo_side">
        <Link to="/">
          <img src={logo} alt="App Logo" height="40" />
        </Link>
        <h1>{title}</h1>
      </div>
      <nav className="app_nav">
        <NavItem to="/about" label={"About"} />
        <NavItem to="/contact" label={"Contact"} />
      </nav>
    </header>
  );
};

const NavItem = ({ to, label }) => {
  return <NavLink to={to}>{label}</NavLink>;
};

export default React.memo(Header);
