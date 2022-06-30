import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import GitHubButton from "react-github-btn";

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <NavbarBrand href="/" className="font-weight-bold" style={color:"red"}>CV Generator App</NavbarBrand>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
