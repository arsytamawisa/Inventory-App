import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavbarQu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="mb-5">
            <Link to="/" className="navbar-brand">Inventory</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/units" className="nav-link">Unit</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/items" className="nav-link">Item</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/stocks" className="nav-link">Stock</Link>
                    </NavItem>
                </Nav>
                <NavbarText >EnigmaCamp</NavbarText>
            </Collapse>
        </Navbar>
    );
}

export default NavbarQu