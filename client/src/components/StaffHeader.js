import logo from './imgs/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavDropdown, Nav, Navbar, Col, Row, Container, LinkContainer } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./styling/HeaderCSS.css"



const StaffHeader = () => {

    return (
       
        <div>

                <Row>
                    <Col md={12}>
                            <Navbar variant="dark" expand="lg" >
                                <Link to="/">
                                    <Navbar.Brand href="#home">
                                        <div className='logo'>
                                        <img src={logo}></img>
                                        </div>
                                    </Navbar.Brand>
                                </Link>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                            <Link to="/">
                                                <Nav.Link href="/home">
                                                    <FontAwesomeIcon icon={faHome} size="lg"/>
                                                </Nav.Link>
                                            </Link>
                                            <Link to="/excursions">
                                                <Nav.Link href="/excursions">Excursions</Nav.Link>
                                            </Link>
                                            <Link to="/login">
                                                <Nav.Link href="/login">Login</Nav.Link>
                                            </Link>
                                            <Link to="/register">
                                                <Nav.Link href="/register">Register</Nav.Link>
                                            </Link>
                                            <Link to="/calendar">
                                                <Nav.Link href="/calendar">
                                                    Calendar
                                                </Nav.Link>
                                            </Link>
                                        </Nav>
                                    </Navbar.Collapse>
                            </Navbar>
                            <br />
                    </Col>   
               </Row>
        </div>
        
    )

}

export default StaffHeader