import React from 'react';
import { withRouter } from 'react-router-dom';

let NavBar = (props) => {
  let noSlashPath = props.history.location.pathname.substring(1);
  console.log(noSlashPath);
  return (
    <nav className="navbar navbar-expand-md col-12 navbar-dark font-weight-bold translucent bg-img" >
      <div className="container">
        <a className="navbar-brand" href="#blank">
          <img src="../images/logo_1x.png" className="img-fluid w-75" alt="Fare Safe" />
        </a>
        <button className="navbar-toggler hidden-lg-up py-3" type="button"
          data-toggle="collapse" data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars fa-lg fa-fw"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item px-2" >
              <a className="nav-link" href="#about-us">ABOUT US</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#blank">SERVICES</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#blank">TREATS</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#blank">MEMBERSHIP</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#contact-us">CONTACT US</a>
            </li>
            <li className="nav-item px-2 dropdown">
              <a className="nav-link dropdown-toggle" href="#blank" id="dropdownId"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BLOG</a>
              <div className="dropdown-menu dropdown-menu-right text-md-center text-uppercase bg-img translucent" aria-labelledby="dropdownId">
                <a className="dropdown-item text-light" href="#blank">Action 2</a>
                <a className="dropdown-item text-light" href="#blank">Action 1</a>
                <a className="dropdown-item text-light" href="#blank">Action 2</a>
                <a className="dropdown-item text-light" href="#blank">Action 1</a>
                <a className="dropdown-item text-light" href="#blank">Action 1</a>
                <a className="dropdown-item text-light" href="#blank">Action 2</a>
              </div>
            </li>
            <li className="nav-item px-2 dropdown">
              <a className="nav-link dropdown-toggle" href="#blank" id="dropdownId"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-lg fa-fw"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right bg-dark py-0"
                aria-labelledby="dropdownId">
                <form className="form-inline col-12 px-0">
                  <input className="form-control bg-secondary border-0 col-12"
                    type="search" placeholder="Search" />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);