import React from 'react';

let PhotoArea = (props) => {
  return (
    <section className="row">
      <div id="photo-area" className="col-12 position-relative border-bottom border-dark">
        <div className="row">
          <div className="position-absolute offset-1" id="profile-photo">
            <img src="./images/ls-icon-1.png"
              className="img-thumbnail rounded position-relative border border-dark"
              alt="User" />
          </div>
          <img src="./images/Language Solutions Letter Head.png"
            className="img-fluid mx-auto" id="cover-photo" alt="Letter Head" />
        </div>
      </div>
    </section>
  );
};

export default PhotoArea;