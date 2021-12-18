import logo from '../imgs/logo2.png';
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css"


const NavigationBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("loggedIn"))
    }, [localStorage.getItem("loggedIn")]);

    const logout = () => {
        localStorage.setItem("loggedIn", false)
        setIsLoggedIn(false);
        localStorage.removeItem("username");
        localStorage.removeItem("accessLevel")
        navigate("/");
    }

    const checkStatus = () => {
        console.log("Printing storage: " + localStorage.getItem("loggedIn"))
     
    }

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
                                        <FontAwesomeIcon icon={faHome} size="lg" />
                                    </Nav.Link>
                                </Link>
                                
                                {isLoggedIn==="true" && localStorage.getItem("accessLevel")==="General Staff" ? (
                                    <>
                                        <Link to="/staffDash">
                                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                        </Link>
                                        <Link to="/calendar">
                                        <Nav.Link href="/calendar">Calendar</Nav.Link>
                                        </Link>
                                        <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}

                                {isLoggedIn==="true" && localStorage.getItem("accessLevel")==="Customer" ? (
                                    <>
                                    <Link to="/excursions">
                                    <Nav.Link href="/excursions">Excursions</Nav.Link>
                                    </Link>
                                    <Link to="/customerDash">
                                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                    </Link>
                                    <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                                </>
                                ) : (
                                    <>
                                    </>
                                )
                                }
                                {isLoggedIn==="false" ?
                                (
                                    <>
                                    <Link to="/excursions">
                                    <Nav.Link href="/excursions">Excursions</Nav.Link>
                                     </Link>
                                    <Link to="/login">
                                        <Nav.Link href="/login">Login</Nav.Link>
                                    </Link>
                                    <Link to="/register">
                                        <Nav.Link href="/register">Register</Nav.Link>
                                    </Link>
                                </>

                                ) : (
                                    <>
                                    </>
                                )}
                                
                                {/* <Link to="/cart">
                                                <Nav.Link href="/cart">
                                                    <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                                                </Nav.Link>
                                            </Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                </Col>
            </Row>
        </div>

    )

}

export default NavigationBar