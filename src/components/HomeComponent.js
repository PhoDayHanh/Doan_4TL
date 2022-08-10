import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Jumbotron,
  Button,
  Media,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
} from "reactstrap";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import home_banner_2 from "../images/home_banner2.jpg"; // Tell webpack this JS file uses this image
import home_banner_3 from "../images/home_banner_3.jpg"; // Tell webpack this JS file uses this image
import home_banner_4 from "../images/home_banner4.jpg"; // Tell webpack this JS file uses this image
import morenewspic1 from "../images/morenews1.jpg"; // Tell webpack this JS file uses this image
import morenewspic2 from "../images/morenews2.jpg"; // Tell webpack this JS file uses this image
import "../css/Home.css";
import { FadeTransform } from "react-animation-components";

class Home extends Component {
  render() {
    return (
      <div className="home_body">
        <h4>Introduce</h4>
        <div className="row row-content">
          <Media list>
            <div className="row mt-5">
              <Media tag="li">
                <Media left middle>
                  <Media
                    className="media_image"
                    object
                    src={home_banner_2}
                    alt="Image 1"
                  />
                </Media>
                <Media body className="ml-5 text-left">
                  <Media heading>Professional in management procedure</Media>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </Media>
              </Media>

              <Media tag="li" className="mt-5">
                <Media body className="mr-5 text-left">
                  <Media heading>Professional in management procedure</Media>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </Media>
                <Media
                  className="media_image"
                  object
                  src={home_banner_3}
                  alt="Image 1"
                />
              </Media>
              <Media tag="li" className="mt-5">
                <Media left middle>
                  <Media
                    className="media_image"
                    object
                    src={home_banner_4}
                    alt="Image 1"
                  />
                </Media>
                <Media body className="ml-5 text-left">
                  <Media heading>Professional in management procedure</Media>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </Media>
              </Media>
            </div>
          </Media>
          <div className="sub_home mt-5">
            <h4 className="mt-5 mb-4">RECENT NEWS</h4>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      src="https://picsum.photos/256/186"
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardSubtitle className="mb-2 text-left" tag="h6">
                        Admin
                      </CardSubtitle>
                      <CardTitle className="text-left" tag="h5">
                        <h4>
                          HOW THE QUANTITY OF FOOD AFFECT ON SHRIMP FFARMING
                        </h4>
                      </CardTitle>
                      <CardText className="text-left">
                        News added on 22/02/2022
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-12 col-sm-4">
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      src="https://picsum.photos/256/186"
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardSubtitle className="mb-2 text-left" tag="h6">
                        User123
                      </CardSubtitle>
                      <CardTitle className="text-left" tag="h5">
                        <h4>FACTORS THAT AAFFECT</h4>
                      </CardTitle>
                      <CardText className="text-left">
                        News added on 12/01/2022
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-12 col-sm-4">
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      src="https://picsum.photos/256/186"
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardSubtitle className="mb-2 text-left" tag="h6">
                        Admin
                      </CardSubtitle>
                      <CardTitle className="text-left" tag="h5">
                        <h4>ANOTHER FACTOR YOU MAY THINK ABOUT</h4>
                      </CardTitle>

                      <CardText className="text-left">
                        News added on 12/11/2022
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>

              <div className="container">
                <h4 className="mt-5 mb-4">TO KNOW MORE NEWS</h4>
                <div className="row mt-5">
                  <div className="col-12 col-sm-5 text-left mr-auto">
                    <div className="text-left row">
                      <div>
                        <h5 className="text-left">
                          Bạn thấy phần mềm có quá nhiều tính năng , không biết
                          khám phá từ đâu ? Ngoài ra, vấn đề nuôi trồng cũng như
                          những thắc mắc khác về dịch vụ, hãy điền vào form để
                          chúng tôi biết điều đó
                        </h5>
                      </div>

                      <span>
                        {" "}
                        <i class="fa fa-star" aria-hidden="true"></i>We has the
                        endorsement from expertise{" "}
                      </span>
                      <span>
                        {" "}
                        <i class="fa fa-star" aria-hidden="true"></i>Response as
                        soon as possible{" "}
                      </span>
                      <span>
                        {" "}
                        <i class="fa fa-star" aria-hidden="true"></i>Easy to
                        communicate with the customer care{" "}
                      </span>
                    </div>

                    <div className="row mt-5">
                      <div className="col-6 ml-auto morenewspic1">
                        <img src={morenewspic1} height="180" width="200" />
                      </div>
                      <div className="col-6 mt-5 mb-5  mr-auto morenewspic2">
                        <img src={morenewspic2} height="180" width="200" />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-5 send_feedback_form center mb-5">
                    <Form className="mt-5 offset-1">
                      <FormGroup row>
                        <Col md={10}>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md={10}>
                          <Input
                            type="tel"
                            id="telnum"
                            name="telnum"
                            placeholder="Your Number"
                          />
                        </Col>
                      </FormGroup>

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
                      <FormGroup row>
                        <Col md={10}>
                          <Input
                            type="textarea"
                            id="message"
                            name="message"
                            rows="8"
                            placeholder="Your issue"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md={{ size: 10 }}>
                          <Button type="submit" color="warning">
                            {" "}
                            Send Feedback
                          </Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
