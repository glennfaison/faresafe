import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

let WelcomeView = (props) => {
  let loginFormContainer = "login-form-container";
  return (
    <section className="row">
      <div className="col-lg-8 col-md-6 d-none-sm order-sm-last order-md-first">
        <p className="h1 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis voluptatibus dolor impedit recusandae illum sequi
          quae, a, placeat aliquid itaque maxime mollitia consequuntur
          delectus et molestias, corrupti ullam enim nihil.
      </p>
      </div>

      <div className="accordion col-lg-4 col-md-6 my-3" id={loginFormContainer}>
        <LoginForm dataParent={"#" + loginFormContainer}/>
        {/* <SignupForm dataParent={"#" + loginFormContainer}/> */}
      </div>
    </section>
  );
}

export default withRouter(WelcomeView);