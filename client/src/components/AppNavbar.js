import React, {useState} from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="sm" className="mb-5">
      <Container>
        <NavbarBrand href="/">ShoppingList</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/rostyk110">Github</NavLink>
            </NavItem>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
