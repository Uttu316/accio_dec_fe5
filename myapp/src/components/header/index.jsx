import "./header.css";
import logo from "../../assets/react.svg";
const Header = (props) => {
  const { title = "Hello" } = props;
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

export default Header;
