import React from 'react';
import { withRouter } from 'react-router-dom';
import InfoBox from '../InfoBox';

let ContactUsView = (props) => {
  return (
    <section className="row w-100">
      <div className="my-4 py-4 col-12 text-center">
        <h1 className="font-weight-bold">CONTACT US</h1>
      </div>
      <div className="d-flex w-100 align-content-between flex-column flex-wrap flex-md-row">
        <InfoBox icon="fa-map-marker-alt" bgColor="bg-success" line1="ADDRESS"
          line2="British Avenue" line3="lorem ipsum dolor sit amet" />
        <InfoBox icon="fa-phone" bgColor="bg-warning" line1="PHONES"
          line2="British Avenue" line3="lorem ipsum dolor sit amet" />
        <InfoBox icon="fa-envelope" bgColor="bg-danger" line1="CONTACTS"
          line2="British Avenue" line3="lorem ipsum dolor sit amet" />
        <InfoBox icon="fa-clock" bgColor="bg-primary" line1="WORKING HOURS"
          line2="British Avenue" line3="lorem ipsum dolor sit amet" />
      </div>
      <div className="col-12">
        <div className="row no-gutters">
          <div className="col-lg-8 order-last p-3 order-lg-first bg-danger ml-3 ml-md-0">
            lorem ipsum dolor sit amet
          </div>
          <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 ml-3 ml-md-0">
            <div className={"d-block border border-light rounded p-4 mx-auto"} id="contact-us-form">
              <div className="form-group">
                <label htmlFor="email" className="col-sm col-form-label col-form-label-sm">Email</label>
                <div className="col-sm">
                  <input type="email" className="form-control form-control-sm" name="email" placeholder="email@example.org" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm col-form-label col-form-label-sm">Name</label>
                <div className="col-sm">
                  <input type="text" className="form-control form-control-sm" name="name" placeholder="John Doe" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="col-sm col-form-label col-form-label-sm">Subject</label>
                <div className="col-sm">
                  <input type="text" className="form-control form-control-sm" name="subject" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="col-sm col-form-label col-form-label-sm">Your Message</label>
                <div className="col-sm">
                  <textarea className="form-control form-control-sm" rows="7" name="message"></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col">
                  <button type="submit"
                    className="btn btn-sm btn-block btn-yellow">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(ContactUsView);