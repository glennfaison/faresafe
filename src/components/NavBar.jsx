import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

let NavBar = (props) => {
  // let noSlashPath = props.history.location.pathname.substring(1);
  let logoutVisibility = (!!props.thisUser)? "": " d-none";
  let loginVisibility = (!!props.thisUser)? " d-none": "";
  let username = (!!props.thisUser)? props.thisUser.firstName: "";
  return (
    <nav className="navbar navbar-expand-md col-12 navbar-dark font-weight-bold translucent bg-img" >
      <div className="container">
        <a className="navbar-brand col-5 col-md-4 col-lg-2 mr-auto" href="#blank">
          <img src={process.env.PUBLIC_URL + "/images/logo_1x.png"}
            className="img-fluid" alt="Fare Safe" />
        </a>
        <button className="navbar-toggler col-auto hidden-lg-up py-3" type="button"
          data-toggle="collapse" data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars fa-lg fa-fw"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item px-2" >
              <a className="nav-link" href="#about-us">Submit Fare Recovery</a>
            </li>
            <li className="nav-item px-2" >
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to={props.routes.contactUs}>Contact Us</Link>
            </li>
            <li className={"nav-item px-2" + loginVisibility}>
              <Link className="nav-link" to={props.routes.contactUs}>Register / Login</Link>
            </li>
            <li className={"nav-item px-2 dropdown" + logoutVisibility}>
              <a className="nav-link dropdown-toggle text-uppercase" href="#blank" id="dropdownId"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{username}</a>
              <div className="dropdown-menu dropdown-menu-right text-md-center text-capitalize bg-img translucent" aria-labelledby="dropdownId">
                <a className="dropdown-item text-light" href="#blank">Logout</a>
                <Link className="dropdown-item text-light" to={props.routes.submitForm}>
                  Submit Form
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    "routes": state.routes,
    "thisUser": state.thisUser
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(NavBar));