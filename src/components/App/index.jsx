import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import NavBar from '../NavBar';
import AppFooter from '../AppFooter';
import PageTopAnchor from '../PageTopAnchor';

// import ErrorView from '../views/ErrorView';
import WelcomeView from '../views/WelcomeView';
import ContactUsView from '../views/ContactUsView';
import RedirectionView from '../views/RedirectionView';
import FormSubmissionView from '../views/FormSubmissionView';
import SubmissionSuccessView from '../views/SubmissionSuccessView';

import './App.css';
import AboutUsView from '../views/AboutUsView';

class App extends React.Component {
  render() {
    // if (this.props.thisUser === null || this.props.thisUser === undefined) {
    //   this.props.history.replace(this.props.routes.login);
    // }
    return (
      <BrowserRouter >
        <div className="container-fluid text-light bg-img" id="page-container">
          <section className="row sticky-top">
            <NavBar />
          </section>

          <div className="container">
            <section className="row">
              <Switch>
                <WelcomeView exact path={this.props.routes.welcome} />
                <ContactUsView exact path={this.props.routes.contactUs} />
                <FormSubmissionView exact path={this.props.routes.submitForm} />
                <SubmissionSuccessView exact path={this.props.routes.submissionSuccess} />
                <AboutUsView exact path={this.props.routes.aboutUs} />
                {/* <ErrorView exact={true} path={this.props.routes.error} /> */}
                <RedirectionView exact={false}
                  redirectPath={this.props.routes.welcome} />
              </Switch>
            </section>
          </div>

          <section className="row">
            <AppFooter />
          </section>

          <section className="position-fixed m-3 d-none d-lg-block" style={{ "bottom": "0px", "right": "0px" }}>
            <PageTopAnchor />
          </section>

        </div>
      </BrowserRouter>
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
