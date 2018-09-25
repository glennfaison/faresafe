import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

let openFormName = "login";
const hideForm = (formName)=> {
  openFormName = (formName === "login")? "signup": "login";
};

const WelcomeView = (props) => {
  return (
    <section className="row w-100">
      <div className="col-12 col-lg-4 ml-3 ml-lg-0 order-lg-last">
        <LoginForm hidden={(openFormName !== "login")} hideThis={hideForm}/>
        <SignupForm hidden={(openFormName !== "signup")} hideThis={hideForm}/>
      </div>
      <div className="col-12 d-none order-lg-first ml-3 ml-lg-0 d-md-block col-lg-8">
      </div>
    </section>
  );
}

export default withRouter(WelcomeView);