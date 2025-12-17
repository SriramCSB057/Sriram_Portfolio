import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>

        <Navbar.Brand className="fw-bold fs-3">Sriram</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto gap-3 fs-5">

            <Link to="home" smooth duration={500} className="nav-link">Home</Link>
            <Link to="about" smooth duration={500} className="nav-link">About</Link>
            <Link to="skills" smooth duration={500} className="nav-link">Skills</Link>
            <Link to="projects" smooth duration={500} className="nav-link">Projects</Link>
            <Link to="contact" smooth duration={500} className="nav-link">Contact</Link>

            <a
              className="nav-link"
           href={process.env.PUBLIC_URL + "/Sriram_FSD_Resume.pdf"}
              download
            >
              Resume
            </a>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
