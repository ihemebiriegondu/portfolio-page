import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import Buttons from "./components/Buttons";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <header>
        <Navbar expand="lg" className="mb-3 pe-4 navbar">
          <Container fluid className="pb-3 justify-content-center">
            <Navbar.Brand href="#" className="py-0 my-0"><Link className="links display-3 animate-character my-0 py-0 ms-sm-4 ms-2" to="/">Ego</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas className=""
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="align-items-center">
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link className="links navs me-5" to="/">Home</Link>
                  <Link className="links navs me-5" to="/about">About me</Link>
                  <Link className="links navs me-5" to="/skills">My skills</Link>
                  <Link className="links navs" to="/contact">Contact me</Link>
                </Nav>
                <Buttons className="hireMeButton" buttonText={"Hire Me"} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router >
  );
}

export default App;
