import React from 'react';
import { withRouter } from 'react-router-dom';


let SubmissionSuccessView = (props) => {
  return (
    <section className="row">
      {/* <div className="mt-4 pt-4 col-12"></div> */}
      <div className="col-lg-7 col-md-6 order-last order-md-first">
        <h1 className="text-bold p-4">You submitted successfully!</h1>
        <p className="h4 p-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae exercitationem hic doloribus tenetur quia aliquam explicabo.
          Voluptatibus qui in incidunt, animi vel soluta at deleniti
          quas reiciendis ullam debitis ratione.
        </p>
      </div>
      <div className="col-lg-5 col-md-6 order-first order-md-last text-center">
        <i className="fa-check fas fa-10x fa-fw text-success"></i>
      </div>
    </section>
  );
};

export default withRouter(SubmissionSuccessView);