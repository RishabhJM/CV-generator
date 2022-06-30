import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import GitHubButton from "react-github-btn";
import "./NavBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <header className="header">
        {/* <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect> */}
          {/* <NavbarBrand href="/" className="font-weight-bold">CV Generator App</NavbarBrand> */}
          <h1 className="nav-bar">CV Generator</h1>
        {/* </Navbar> */}
      </header>
    </nav>
  );
};

export default NavBar;
