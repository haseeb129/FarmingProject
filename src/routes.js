import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import "./App.css";

import Logind from "../src/auth/Loginnnn";
import ForgetPassword from "./auth/ForgetPassword";

import ConfirmPassword from "../src/auth/ConfirmPasswrod";
import Layout from "../src/Layout/layout";
import Forcasting from "../src/Pages/Forcasting";
import Overview from "../src/Pages/Overview";
import Weather from "../src/Pages/wealther";
import Inputdata from "../src/Pages/inputdata";
import Register from "../src/auth/Register";
require("./RoundedBars");
class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginToken: localStorage.getItem("logintoken")
        ? localStorage.getItem("logintoken")
        : null,
      isShow: true,
    };
  }
  componentDidMount = () => {
    console.log(window.location);
  };

  // handlelogout = () => {
  //   localStorage.removeItem("logintoken");
  //   window.location.href = "/";
  // };

  // const loggedin=localStorage.getItem('jwtToken');
  // this.setState({loggedIn:loggedin});
  // componentDidMount() {
  //   console.log("routes", this.props)
  // }

  render() {
    console.log(this.state.loginToken);
    console.log("props", this.props);
    return (
      <Router>
        <React.Fragment>
          {this.state.loginToken ? (
            // logout={this.handlelogout}
            <Layout {...this.props}>
              <Switch>
                <Route
                  exact
                  path="/forCasting"
                  render={() => {
                    if (this.state.loginToken) return <Forcasting />;
                    else return <Redirect to="/login" />;
                  }}
                />
                <Route exact path="/overView" component={Overview} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/inputData" component={Inputdata} />

                {/* <Route exact path="/" component={Overview} /> */}
                {/* <Route exact path="*" component={Overview} /> */}
              </Switch>
            </Layout>
          ) : (
            <Switch>
              <Route exact path="/" component={Logind} />
              <Route exact path="/register" component={Register} />

              <Route exact path="/forgetPassword" component={ForgetPassword} />

              <Route
                exact
                path="/ResetPassword/:id"
                component={ConfirmPassword}
              />
              <Route
                exact
                path="/forCasting"
                render={() => {
                  if (this.state.loginToken) return <Forcasting />;
                  else return <Redirect to="/" />;
                }}
              />
              <Route
                exact
                path="/overView"
                render={() => {
                  if (this.state.loginToken) return <Overview />;
                  else return <Redirect to="/" />;
                }}
              />
              <Route
                exact
                path="/weather"
                render={() => {
                  if (this.state.loginToken) return <Weather />;
                  else return <Redirect to="/" />;
                }}
              />
              <Route
                exact
                path="/input"
                render={() => {
                  if (this.state.loginToken) return <Inputdata />;
                  else return <Redirect to="/" />;
                }}
              />
              {/* <Route exact path="*" component={Logind} /> */}
            </Switch>
          )}
        </React.Fragment>
      </Router>
    );
  }
}

export default withRouter(Routes);
