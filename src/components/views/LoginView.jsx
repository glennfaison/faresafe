import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';

let LoginView = (props) => {
  return (
    <section className="row">
      <div className="mt-4 pt-4 col-12"></div>
      <div className="col-lg-7 col-sm-6">
        <h1 className="text-bold p-4">Listen to Eminem!</h1>
        <p className="h4 p-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae exercitationem hic doloribus tenetur quia aliquam explicabo.
          Voluptatibus qui in incidunt, animi vel soluta at deleniti
          quas reiciendis ullam debitis ratione.
          </p>
      </div>
      <div className="col-lg-5 col-sm-6">
        <LoginForm />
      </div>
    </section>
  );
}

export default withRouter(LoginView);