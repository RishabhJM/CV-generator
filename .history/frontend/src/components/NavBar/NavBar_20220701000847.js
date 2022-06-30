import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import GitHubButton from "react-github-btn";

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          {/* <NavbarBrand href="/" className="font-weight-bold">CV Generator App</NavbarBrand> */}
          <h1><a href="/">CV Generator</a></h1>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
