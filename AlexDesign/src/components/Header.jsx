import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/Logo.png";

const Header = () => {
    const location = useLocation();

    const isPathActive = (path) => {
        if (location.pathname === path) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="text-light inter-bold" href="/">
                    <img
                        src={Logo}
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    AlexDesign
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" variant="underline">
                        <Nav.Item>
                            <Nav.Link
                                className="text-light inter-medium"
                                href="/"
                                active={isPathActive("/")}
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="text-light inter-medium"
                                href="/project"
                                active={isPathActive("/project")}
                            >
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="text-light inter-medium"
                                href="/about"
                                active={isPathActive("/about")}
                            >
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="text-light inter-medium"
                                href="/contact"
                                active={isPathActive("/contact")}
                            >
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="text-light inter-medium"
                                href="/cv"
                                active={isPathActive("/cv")}
                            >
                                My Cv
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
