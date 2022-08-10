import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomeComponent";
import News from "./News";
import Features from "./Features";
import ScanComponent from "./ScanComponent";
import Contact from "./ContactComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <BrowserRouter>
        <div className="App">
          <Header />


          <Switch location={this.props.location}>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/news" component={News} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/scancode" component={ScanComponent} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/home" />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
