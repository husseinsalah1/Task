import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/imgs/logo.png";
import flag from "../../assets/imgs/Flags.png";
const Navigation = () => {
  const navbarData = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "Login",
      path: "#login",
    },
    {
      name: "Register",
      path: "#register",
    },
  ];
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Dropdown>
            <Dropdown.Toggle className="select" id="dropdown-basic">
              <img src={flag} alt="Icon" className="icon" />{" "}
              <span style={{ margin: "10px" }}>الامارات</span>
            </Dropdown.Toggle>
          </Dropdown>
        </Navbar.Brand>{" "}
        <Navbar.Brand href="#home">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navbarData.map((navLink) => (
              <Nav.Link href={navLink.path} key={navLink.name}>
                {navLink.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
