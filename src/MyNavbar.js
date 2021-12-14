import React from 'react'
import { Nav, Navbar, Container, NavItem } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Cart from './Cart';
import Home from './Home';
import Products from './Products'

function MyNavbar() {
    return (
        <div>
            <>
                <Router>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand className="nav-link">Khan Store</Navbar.Brand>
                            <Nav className="me-auto">
                                <Link to='/' className="nav-link">Home</Link>
                                <Link to='/Products' className="nav-link">Products</Link>
                                <Link to='/Cart' className="nav-link">Cart</Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route exact path='/Products'><Products /></Route>
                        <Route exact path='/Cart'><Cart /></Route>
                    </Switch>
                </Router>

            </>
        </div>
    )
}

export default MyNavbar
