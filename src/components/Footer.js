import React, { Component } from "react";
import "../css/Footer.css";
import { FormGroup, Input, Col } from "reactstrap";
import { Link } from "react-router-dom";
import vietgap from "../images/vietgap.jpg";
import globalgap from "../images/globalgap.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="container text-left">
          <div className="row text-left">
            <div className="col-6 col-sm-3 mt-4">
              <h4 className="footer_title">Contact details</h4>
              <hr class="solid"></hr>
              <ul className="list-unstyled contact_links">
                <li>
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <a
                    href="/contactus"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-3 mt-4">
              <h4 className="footer_title">Standarts</h4>
              <hr class="solid"></hr>
              <ul className="list-unstyled contact_links standarts_list">
                <li> 
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img src={vietgap} alt="vietgap" height="50" width="50" />
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                     <img src={globalgap}  alt="vietgap" height="50" width="50" />
                  </Link>
                </li>
              
              </ul>
            </div>
            <div className="col-6 col-sm-3 mt-4">
              <h4 className="footer_title">Explore</h4>
              <hr class="solid"></hr>
              <ul className="list-unstyled contact_links">
                <li>
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Cultivation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-3 mt-4">
              <h4 className="footer_title">Notification</h4>
              <hr class="solid"></hr>
              <ul className="list-unstyled contact_links">
                <li className="mb-3">
                  To know more information please type your mail in the form
                  below
                </li>
                <li>
                  <FormGroup row>
                    <Col md={10}>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </Col>
                  </FormGroup>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2022 SCS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
