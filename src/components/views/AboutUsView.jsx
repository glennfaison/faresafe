import React from 'react';
import { withRouter } from 'react-router-dom';

let AboutUsView = (props) => {
  return (
    <React.Fragment>
      <div className="col-sm-12 text-uppercase font-weight-bold text-center h1 p-3 mb-3">
        About Us
      </div>
      <div className="row no-gutters">
        <div className="col-md-6 order-md-first order-sm-last">
          <div className="py-3">
            <video width="100%" height="100%" controls="controls"
              src="http://www.faresafe.co.uk/IMG_1615.mp4"
              poster="http://www.faresafe.co.uk/wp-content/uploads/2018/03/dave.jpg"
              preload="none"></video>
          </div>
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
            <img src={process.env.PUBLIC_URL + "/images/logo_1x.png"} className="img-fluid mx-auto" alt="Fare Safe" />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(AboutUsView);