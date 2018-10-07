import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Page from './Page'
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap'

const Home = () => (
    <div>
        <Page title="Домашняя" desc="Это домашняя страница" />
    </div>
)

const About = () => (
    <div>
        <Page title="О нас" desc="Страница о нас" />
    </div>
)

const Contact = () => (
    <div>
        <Page title="Контакты" desc="Здесь находятся контакты" />
    </div>
)

const App = () => (
    <Router>
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="mr-auto">PXSTUDIO</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/">Домашняя</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/about">О нас</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/contact">Контакты</Link>
                    </NavItem>
                </Nav>
            </Navbar>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

        </div>
    </Router>
)

export default App;