import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      {/* Navbar Başlangıcı */}
      <Navbar 
        color="white" 
        light 
        expand="md" 
        className="shadow-sm py-3" 
        style={{ borderBottom: '4px solid #ce93d8' }} 
      >
        <Container>
          
{}
          <NavbarBrand href="/" className="d-flex align-items-center">
            <span style={{ fontSize: '2.2rem', marginRight: '8px' }}>💄</span>
            <span style={{ 
              color: '#6a4c93', 
              fontFamily: '"Pacifico", cursive', 
              fontSize: '1.8rem',
              fontWeight: '400',
              textShadow: '2px 2px 0px rgba(206, 147, 216, 0.4)' 
            }}>
              Bücürük Makyaj
            </span>
          </NavbarBrand>

          <NavbarToggler onClick={toggle} style={{ border: 'none' }} />
          
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              
              {}
              <NavItem>
                <NavLink href="/" className="nav-link-custom px-3">
                  <span className="me-2">🛍️</span> Ürünler
                </NavLink>
              </NavItem>

              {}
              <NavItem>
                <NavLink href="/hakkimizda" className="nav-link-custom px-3">
                  <span className="me-2">✨</span> Hakkımızda
                </NavLink>
              </NavItem>

              {}
              <NavItem>
                <NavLink href="/iletisim" className="nav-link-custom px-3">
                  <span className="me-2">📞</span> İletişim
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;