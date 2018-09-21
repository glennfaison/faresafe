import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../NavBar';
import AppFooter from '../AppFooter';
import RedirectionView from '../views/RedirectionView';
import WelcomeView from '../views/WelcomeView';
import FormSubmissionView from '../views/FormSubmissionView';
import SubmissionSuccessView from '../views/SubmissionSuccessView';
import ContactUsView from '../views/ContactUsView';

import SignupView from '../views/SignupView';
import ErrorView from '../views/ErrorView';

import './App.css';
import PageTopAnchor from '../PageTopAnchor';

class App extends React.Component {
  render() {
    // if (this.props.thisUser === null || this.props.thisUser === undefined) {
    //   this.props.history.replace(this.props.routes.login);
    // }
    return (
      <Router basename={this.props.routes.baseRoute} >
        <div className="container-fluid text-light bg-img" id="page-container">
          <section className="row sticky-top">
            <NavBar />
          </section>

          <div className="container">
            <section className="row">
              <Switch>
                <SignupView exact={true}
                  path={this.props.routes.signup} />
                <ErrorView exact={true}
                  path={this.props.routes.error} />
                <WelcomeView exact path={this.props.routes.welcome} />
                <ContactUsView exact path={this.props.routes.contactUs} />
                <FormSubmissionView exact path={this.props.routes.submitForm} />
                <SubmissionSuccessView exact path={this.props.routes.submissionSuccess} />
                <RedirectionView exact={false}
                  path={this.props.routes.root}
                  redirectPath={this.props.routes.welcome} />
              </Switch>
            </section>

            <section className="row mb-3" id="about-us">
              <div className="col-sm-12 text-uppercase font-weight-bold text-center h1 p-3 mb-3">
                About Us
              </div>
              <div className="row no-gutters">
                <div className="col-md-6 order-md-first order-sm-last">
                  Video embedded here
              </div>
                <div className="col-md-4 offset-md-1">
                  <h1>WE ARE FARESAFE</h1>
                  <p className="h4 font-weight-light">
                    At Fare Safe we believe we can achieve a greater work-life
                    balance for our members by taking on those pressures that Taxi
                    and Private Hire Drivers are faced with each day and relieving
                    you of all the hassle.
                </p>
                  <a href="#blank">Read More…</a>.
                  <p className="text-center">
                    <img src="../../images/logo_1x.png" className="img-fluid mx-auto" alt="Fare Safe" />
                  </p>
                </div>
              </div>
            </section>
          </div>


          <section className="row">
            <AppFooter />
          </section>

          <section className="position-fixed m-3" style={{ "bottom": "0px", "right": "0px" }}>
            <PageTopAnchor />
          </section>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes,
    thisUser: state.thisUser
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
