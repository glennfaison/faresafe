import React from 'react';
import { Link } from 'react-router-dom';

let AppFooter = (props) => {
  return (
    <footer className="d-flex col-12 py-5 px-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center small py-4">
            Developed by <Link to="http://www.yourbrandreach.net">Your Brand Reach</Link> for Fare Safe LTD
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;