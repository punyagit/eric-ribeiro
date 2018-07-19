import React from 'react';
import './NavComponent.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div className="headerLogo">
          <span>Eric Ribeiro</span>
        </div>
        <div>
          <Navbar className="navBar" light expand="md">
            <NavbarBrand></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/bookings">Bookings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">SignUp</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
};

export default NavComponent;