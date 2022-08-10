import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Jumbotron,
  Button,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import "../css/Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div className="header">
        <Navbar dark className="navbar-custom" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="text-left">
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span>Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/scancode">
                      <span className="fa fa-qrcode fa-lg"></span>Scan Code
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/features">
                      <span className="fa fa-grav fa-lg"></span>Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/news">
                      <span className="fa fa-newspaper-o fa-lg"></span>News
                    </NavLink>
                  </NavItem>
                  <NavItem className="mr-auto">
                    <NavLink className="nav-link" to="/contact">
                      <span className="fa fa-phone-square fa-lg"></span>Contact
                      Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
         
            <NavbarBrand href="/">Nha hang 6 Sao</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container home_banner h-25">
            <div className="row row-header">
              <div className="col-12 col-sm-6 header_description mx-auto mt-4">
                <h1>
                  With our Website, you can know the statistic based to VietGap
                </h1>
                <Button className="btn-warning start_btn btn-lg">
                  <h2>Start Now</h2>
                </Button>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
