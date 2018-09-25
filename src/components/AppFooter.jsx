import React from 'react';
import { Link } from 'react-router-dom';

let AppFooter = (props) => {
  return (
    <footer className="d-flex col-12 py-5 px-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-auto px-0">
                Developed by <Link to="http://www.yourbrandreach.net">Your Brand Reach</Link> for Fare Safe LTD
              </div>
            </div>
          </div>
          <div className="align-self-end align-self-baseline">
            <Link to="https://www.facebook.com/Fare-Safe-292838071489904/">
              <i class="fas fa-facebook-square fa-lg fa-fw"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/fare-safe-ltd/">
              <i class="fas fa-linkedin fa-lg fa-fw"></i>
            </Link>
            <Link to="https://twitter.com/FareSafeLtd">
              <i class="fas fa-twitter-square fa-lg fa-fw"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;