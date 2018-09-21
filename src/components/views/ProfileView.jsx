import React from 'react';
import { withRouter } from 'react-router-dom';

import PhotoArea from '../PhotoArea';
import ProfileInfo from '../ProfileInfo';

let ProfileView = (props) => {
  return (
    <React.Fragment>
      <PhotoArea />
      <ProfileInfo />
    </React.Fragment>
  );
};

export default withRouter(ProfileView);