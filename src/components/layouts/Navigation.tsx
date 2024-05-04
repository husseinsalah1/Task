import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/imgs/logo.png";
import flag from "../../assets/imgs/Flags.png";
import down from "../../assets/imgs/Down 2.png";
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
          <div className="flag">
            <Image src={flag} />
            <span style={{ margin: "0px" }}>الامارات</span>
            <i>
              <Image src={down} />
            </i>
          </div>
        </Navbar.Brand>
        <Navbar.Brand href="#home"></Navbar.Brand>
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
